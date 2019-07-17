<?php

namespace W7\App\Model\Logic;



use W7\App\Model\Entity\Test;

class TestLogic extends BaseLogic
{
    public function addUser($name)
    {
        $user = Test::create(['name'=>$name]);
        return $user;
    }

    public function getUser($id)
    {
        $cacheUser = $this->get('user_'.$id);
        if($cacheUser){
            $user = $cacheUser;
            $user->from = 'cache';
        }else{
            $user = Test::find($id);
            $this->set('user_'.$id,$user);
        }
        return $user;
    }
}