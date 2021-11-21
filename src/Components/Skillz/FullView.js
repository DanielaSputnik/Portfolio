import React from 'react'
import { FWCloseBtn, FWWindow, FWWindowInner } from './FullViewElements';


function FullView(props) {
    return(
        (props.trigger) ? (
            <FWWindow>
                <FWWindowInner>
                    <FWCloseBtn
                        onClick={() => props.setTrigger(false)}>x
                    </FWCloseBtn>
                    {props.children}
                </FWWindowInner>

            </FWWindow>
        ) : ''
    )
}

export default FullView
