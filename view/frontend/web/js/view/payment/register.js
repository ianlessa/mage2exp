define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/payment/renderer-list'
    ],
    function (Component, rendererList) {
        'use strict';

        rendererList.push(
            {
                type: 'ianlessa_mage2exp_card',
                component: 'IanLessa_Mage2Exp/js/view/payment/method-renderer/renderer'
            }
        );

        return Component.extend({});
    }
);