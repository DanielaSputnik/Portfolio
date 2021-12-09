import React from 'react'
import { FWCloseBtn, FWWindow, FWWindowInner, FWHeader } from './FullViewElements';
import { ImCross } from 'react-icons/im';


function FullView(props) {
    return(
        (props.trigger) ? (
            <FWWindow>
                <FWWindowInner>
                    <FWHeader>{props.windowTitle}</FWHeader>
                    <FWCloseBtn
                        onClick={() => props.setTrigger(false)}><ImCross />
                    </FWCloseBtn>
                    {props.children}
                </FWWindowInner>

            </FWWindow>
        ) : ''
    )
}

export default FullView
