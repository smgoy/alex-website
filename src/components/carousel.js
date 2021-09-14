import React from 'react';
import style from './carousel.module.css';

import openingImg from '../images/carousel_image4.jpg';
import rightImg from '../images/carousel_image1.jpg';
import leftImg from '../images/carousel_image2.jpg';
import hiddenImg1 from '../images/carousel_image3.jpg';
import hiddenImg2 from '../images/carousel_image5.jpg';


import Image from './image';


// class Carousel extends React.Component { 
//     state = {
//         images: [
//             hiddenImg1,
//             leftImg,
//             openingImg,
//             rightImg,
//             hiddenImg2
//         ],
//         translateX: [
//             -200,
//             -100,
//             0,
//             100,
//             200
//         ],
//         width: '0%',
//         translate: '0',
//         mainOpacity: 1,
//         moveRightOpacity: .25,
//         moveLeftOpacity: .25,
//         hiddenOpacity: .25,
//         isRightRender: false
//     }

//     componentDidMount() {
//         const minusToolbar = window.innerHeight - window.outerHeight;
//         const maxViewPort = minusToolbar + window.screen.availHeight;
//         const maxImageHeight = maxViewPort - 201;
//         const imgWidth = (3 * maxImageHeight) / 2;
//         const widthPercent = (imgWidth / window.screen.width) * 100;
//         const width = Math.round(widthPercent).toString() + '%';

//         this.setState({
//             width
//         })

//         // this.timerMove = setInterval(() => this.moveImgRight(), 4000);
//         // setTimeout(() => {
//         //     this.timerRender = setInterval(() => this.moveRenderRight(), 4000);
//         // }, 2000)

//         // setTimeout(() => {this.slideLeft()}, 5000)
//     }

//     // moveImgLeft = () => {
//     //     this.setState({
//     //         translate: '100%',
//     //         mainOpacity: .25,
//     //         moveLeftOpacity: 1
//     //     })
//     // }

//     moveImgRight = () => {
//         // this.setState(prevState => {
//         //     const translate = prevState.translate - 100

//         //     return {
//         //         translate,
//         //         mainOpacity: .25,
//         //         moveRightOpacity: 1
//         //     }
            
//         // })
//         this.setState({
//             translate: -100,
//             mainOpacity: .25,
//             moveRightOpacity: 1,
//             isRightRender: false
//         })
//     }

//     moveRenderRight = () => {
//         this.setState( prevState => {
//             let images = prevState.images;
//             const firstImage = images.shift();
//             images.push(firstImage);
            
//             return {
//                 images,
//                 translate: 0,
//                 mainOpacity: 1,
//                 moveRightOpacity: .25,
//                 isRightRender: true
//             }
//         })
//     }

//     slideLeft = () => {
//         this.setState({
//             translate: -350,
//             isRightRender: false,
//             mainOpacity: 1,
//             moveRightOpacity: 1,
//             moveLeftOpacity: 1,
//             hiddenOpacity: 1
//         })
//     }

//     // transition-property: transform, opacity;
//     // transition-duration: 2.5s, 2.5s;
//     // transition-timing-function: ease-in-out, ease-in;

//     render() {
//         return (
//             <div className={ style.container }>
//                 { this.state.images.map( (img, i) => {

//                     let style = {
//                         width: this.state.width,
//                         transform: 'translateX(' + this.state.translate + '%)',
//                     }

//                     if (!this.state.isRightRender) {
//                         style = Object.assign(style, {
//                             transitionProperty: 'transform, opacity',
//                             transitionDuration: '2s, 2s',
//                             transitionTimingFunction: 'ease-in-out, ease-in'
//                         })
//                     }

//                     //what if images in an unknown length?
//                     //recursive loop from middle to end

//                     if (i === Math.floor(this.state.images.length/2)) {
//                         style = Object.assign(style, {opacity: this.state.mainOpacity})
//                         //tranformX=0
                        
//                         return (
//                             <Image 
//                                 key={ i } 
//                                 img={ img }
//                                 style={ style }
//                             />
//                         );
//                     } else if (i === (Math.floor(this.state.images.length/2) - 1) || i === (Math.floor(this.state.images.length/2) + 1)) {
//                             let onClick
//                             let opacity
//                             if (i === (Math.floor(this.state.images.length/2) - 1)) {
//                                 onClick = this.moveImgLeft
//                                 style = Object.assign(style, {opacity: this.state.moveLeftOpacity})
//                                 //transformX=100
//                             } else {
//                                 onClick = this.moveImgRight
//                                 // opacity = this.state.moveRightOpacity
//                                 style = Object.assign(style, {opacity: this.state.moveRightOpacity})
//                                 //transformX=-100

//                             }
//                             return (
//                                 <Image 
//                                     key={ i }
//                                     onClick={ onClick }
//                                     img={ img }
//                                     style={ style }
//                                 />
//                             );
//                         } else {
//                             style = Object.assign(style, {opacity: this.state.hiddenOpacity})
//                             return (
//                                 <Image 
//                                     key={ i } 
//                                     img={ img }
//                                     style={ style }
//                                 />
//                             );
//                         }
//                     }

//                  ) }
//             </div>
//         )
//     }
// }

// export default Carousel;


/* Things to work on

- Make the transition simpler. Maybe render all on the same spot, and off set them with translateX, then re-render the elements that are not visible
    - Enter animation 
- Exit animation (all zoom out)
- Research the quality of images I should use/load time tradeoff
*/




// This works! but messy

class Carousel extends React.Component { 
    state = {
        images: [
            hiddenImg1,
            leftImg,
            openingImg,
            rightImg,
            hiddenImg2
        ],
        width: '0%',
        translate: '0',
        mainOpacity: 1,
        moveRightOpacity: .25,
        moveLeftOpacity: .25,
        hiddenOpacity: .25,
        isRightRender: false
    }

    componentDidMount() {
        const minusToolbar = window.innerHeight - window.outerHeight;
        const maxViewPort = minusToolbar + window.screen.availHeight;
        const maxImageHeight = maxViewPort - 201;
        const imgWidth = (3 * maxImageHeight) / 2;
        const widthPercent = (imgWidth / window.screen.width) * 100;
        const width = Math.round(widthPercent).toString() + '%';

        this.setState({
            width
        })

        this.timerMove = setInterval(() => this.moveImgRight(), 4000);
        setTimeout(() => {
            this.timerRender = setInterval(() => this.moveRenderRight(), 4000);
        }, 2000)

        // setTimeout(() => {this.slideLeft()}, 5000)
    }

    // moveImgLeft = () => {
    //     this.setState({
    //         translate: '100%',
    //         mainOpacity: .25,
    //         moveLeftOpacity: 1
    //     })
    // }

    moveImgRight = () => {
        // this.setState(prevState => {
        //     const translate = prevState.translate - 100

        //     return {
        //         translate,
        //         mainOpacity: .25,
        //         moveRightOpacity: 1
        //     }
            
        // })
        this.setState({
            translate: -100,
            mainOpacity: .25,
            moveRightOpacity: 1,
            isRightRender: false
        })
    }

    moveRenderRight = () => {
        this.setState( prevState => {
            let images = prevState.images;
            const firstImage = images.shift();
            images.push(firstImage);
            
            return {
                images,
                translate: 0,
                mainOpacity: 1,
                moveRightOpacity: .25,
                isRightRender: true
            }
        })
    }

    slideLeft = () => {
        this.setState({
            translate: -350,
            isRightRender: false,
            mainOpacity: 1,
            moveRightOpacity: 1,
            moveLeftOpacity: 1,
            hiddenOpacity: 1
        })
    }

    // transition-property: transform, opacity;
    // transition-duration: 2.5s, 2.5s;
    // transition-timing-function: ease-in-out, ease-in;

    render() {
        return (
            <div className={ style.container }>
                { this.state.images.map( (img, i) => {

                    let style = {
                        width: this.state.width,
                        transform: 'translateX(' + this.state.translate + '%)',
                    }

                    if (!this.state.isRightRender) {
                        style = Object.assign(style, {
                            transitionProperty: 'transform, opacity',
                            transitionDuration: '2s, 2s',
                            transitionTimingFunction: 'ease-in-out, ease-in'
                        })
                    }

                    if (i === Math.floor(this.state.images.length/2)) {
                        style = Object.assign(style, {opacity: this.state.mainOpacity})
                        return (
                            <Image 
                                key={ i } 
                                img={ img }
                                style={ style }
                            />
                        );
                    } else {
                        if (i === (Math.floor(this.state.images.length/2) - 1) || i === (Math.floor(this.state.images.length/2) + 1)) {
                            let onClick
                            let opacity
                            if (i === (Math.floor(this.state.images.length/2) - 1)) {
                                onClick = this.moveImgLeft
                                style = Object.assign(style, {opacity: this.state.moveLeftOpacity})
                            } else {
                                onClick = this.moveImgRight
                                // opacity = this.state.moveRightOpacity
                                style = Object.assign(style, {opacity: this.state.moveRightOpacity})

                            }
                            return (
                                <Image 
                                    key={ i }
                                    onClick={ onClick }
                                    img={ img }
                                    style={ style }
                                />
                        );
                        } else {
                            style = Object.assign(style, {opacity: this.state.hiddenOpacity})
                            return (
                                <Image 
                                    key={ i } 
                                    img={ img }
                                    style={ style }
                                />
                            );
                        }
                    }

                } ) }
            </div>
        )
    }
}

export default Carousel;