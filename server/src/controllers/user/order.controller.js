import OrderModel from '../../models/Order.model'

export const getAllOrder = async (req, res) => {
    try {
        const getOrders = await OrderModel.find({
            user: req.user.userId
        }).sort({ createdAt: -1 })
        return res.status(200).json({
            status: true,
            order: getOrders
        })
    } catch (error) {
        res.status(500).json({ message: "Error fetching food items", error: error.message });
    }
}
export const getOderDetailById = async (req, res) => {

}