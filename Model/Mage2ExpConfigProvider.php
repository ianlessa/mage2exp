<?php

namespace IanLessa\Mage2Exp\Model;

use Magento\Checkout\Model\ConfigProviderInterface;

class Mage2ExpConfigProvider implements ConfigProviderInterface
{
    public function getConfig()
    {
        return [
             'key' => 'value'
        ];
    }
}