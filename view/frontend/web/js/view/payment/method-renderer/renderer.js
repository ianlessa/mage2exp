define(
    [
        'Magento_Checkout/js/view/payment/default'
    ],
    function (Component) {
        'use strict';

        return Component.extend({
            defaults: {
                template: 'IanLessa_Mage2Exp/payment/card'
            },

            context: function() {
                return this;
            },

            getCode: function() {
                return 'ianlessa_mage2exp_card';
            },

            isActive: function() {
                return true;
            }
        });
    }
);