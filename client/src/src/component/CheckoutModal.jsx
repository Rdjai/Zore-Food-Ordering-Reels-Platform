import React, { useState, useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import {
    addUserAddress,
    clearAddressError,
    fetchUserAddress,
    updateUserAddress,
} from "../redux/features/user/addressSlice";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 450,
    bgcolor: "background.paper",
    borderRadius: "12px",
    boxShadow: 24,
    p: 4,
};

export default function Checkout({ userId, totalAmount, onPay }) {
    const dispatch = useDispatch();
    const { address: savedAddress, loading, error } = useSelector(
        (state) => state.address
    );
    const [open, setOpen] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [address, setAddress] = useState({
        street1: "",
        street2: "",
        city: "",
        state: "",
        zipCode: "",
        country: "India",
    });


    useEffect(() => {
        if (open && userId) {
            dispatch(fetchUserAddress(userId));
        }
    }, [open, userId, dispatch]);

    useEffect(() => {
        if (!open && error) dispatch(clearAddressError());
    }, [open, error, dispatch]);

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setEditMode(false);
    };

    const handleChange = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value });
    };

    const handleSaveAddress = async () => {
        if (!address.street1 || !address.city || !address.state || !address.zipCode) {
            alert("Please fill in all required fields");
            return;
        }
        try {
            await dispatch(addUserAddress(address)).unwrap();
            alert("Address saved successfully!");
            setEditMode(false);
        } catch (err) {
            console.error("Error saving address:", err);
            alert("Failed to save address");
        }
    };

    const handleProceed = () => {
        if (!savedAddress) {
            alert("Please save your address first");
            return;
        }
        onPay(savedAddress);
        handleClose();
    };

    return (
        <div>
            <button
                onClick={handleOpen}
                className="w-full mt-6 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition hover:cursor-pointer"
            >
                Checkout
            </button>

            <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: { timeout: 500 },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography
                            id="transition-modal-title"
                            variant="h6"
                            component="h2"
                            className="text-center font-semibold text-gray-800"
                        >
                            Checkout 🛍️
                        </Typography>

                        {loading ? (
                            <p className="text-center mt-4 text-gray-500">Loading address...</p>
                        ) : savedAddress && !editMode ? (
                            // ✅ Show saved address and pay button
                            <div className="mt-4 text-gray-700">
                                <h3 className="font-medium mb-2">Saved Delivery Address:</h3>
                                <p>{savedAddress.street1}</p>
                                {savedAddress.street2 && <p>{savedAddress.street2}</p>}
                                <p>
                                    {savedAddress.city}, {savedAddress.state} - {savedAddress.zipCode}
                                </p>
                                <p>{savedAddress.country}</p>

                                <button
                                    onClick={handleProceed}
                                    className="w-full mt-5 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
                                >
                                    Pay ₹{totalAmount}
                                </button>

                                <button
                                    onClick={() => setEditMode(true)}
                                    className="w-full mt-3 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition"
                                >
                                    Change Address
                                </button>
                            </div>
                        ) : (
                            // 🏠 Add or Edit Address Form
                            <div className="mt-4 space-y-3">
                                <h3 className="font-medium text-gray-700 mb-2">
                                    {savedAddress ? "Update Your Address:" : "Enter Delivery Address:"}
                                </h3>

                                <input
                                    name="street1"
                                    placeholder="Street Address"
                                    value={address.street1}
                                    onChange={handleChange}
                                    className="w-full border rounded-md p-2"
                                />
                                <input
                                    name="street2"
                                    placeholder="Apartment, suite, etc (optional)"
                                    value={address.street2}
                                    onChange={handleChange}
                                    className="w-full border rounded-md p-2"
                                />
                                <input
                                    name="city"
                                    placeholder="City"
                                    value={address.city}
                                    onChange={handleChange}
                                    className="w-full border rounded-md p-2"
                                />
                                <input
                                    name="state"
                                    placeholder="State"
                                    value={address.state}
                                    onChange={handleChange}
                                    className="w-full border rounded-md p-2"
                                />
                                <input
                                    name="zipCode"
                                    placeholder="Pincode"
                                    value={address.zipCode}
                                    onChange={handleChange}
                                    className="w-full border rounded-md p-2"
                                />

                                <button
                                    disabled={loading}
                                    onClick={handleSaveAddress}
                                    className={`w-full mt-4 py-2 rounded-lg text-white transition ${loading
                                        ? "bg-gray-400 cursor-not-allowed"
                                        : "bg-blue-500 hover:bg-blue-600"
                                        }`}
                                >
                                    {loading ? "Saving..." : "Save Address"}
                                </button>

                                {savedAddress && (
                                    <button
                                        onClick={() => setEditMode(false)}
                                        className="w-full mt-3 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition"
                                    >
                                        Cancel
                                    </button>
                                )}
                            </div>
                        )}
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
