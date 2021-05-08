/**
 * 接口列表文件
 * **/
export default {

    /** 门店 ↓ */
    shop: {
        list: {
            url: "mobile/find/ente/list/by/mobile/and/action/code",
            auth: false,
            method: "POST",
            // desc: 门店-门店列表
        },
        orderList: {
            url: "mobile/find/order/list/by/ente",
            auth: false,
            method: "POST",
            // desc: 门店-订单列表
        },
        orderDetail: {
            url: "mobile/find/cash/by/order/id",
            auth: false,
            method: "POST",
            // desc: 门店-订单详情
        },
    },
    /** 消费者结账 ↓ */
    clienteleAccounts: {
        isMember: {
            url: "mobile/check/consume/can/cashier",
            auth: true,
            method: "POST",
            // desc: 消费者-结账-是否可以使用会员卡
        },
        useMember: {
            url: "mobile/find/card/detail/by/user/id",
            auth: true,
            method: "POST",
            // desc: 消费者-结账-会员卡
        },
        useMember: {
            url: "mobile/get/cash/or/choose/card",
            auth: true,
            method: "POST",
            // desc: 消费者-结账-账单详情
        },
    }
};