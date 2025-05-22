/* This contains instructions for building a chair */
import chairCoverImage from '../../images/chair/cover.jpg';
import chairStepOne from '../../images/chair/chair_step_1.png';
import chairStepTwo from '../../images/chair/chair_step_2.jpg';
import chairStepThree from '../../images/chair/chair_step_3.jpg';
import chairStepFour from '../../images/chair/chair_step_4.jpg';
import chairStepFive from '../../images/chair/chair_step_5.png';
import chairStepSix from '../../images/chair/chair_step_6.jpg';

const chair = {
    title: 'Chair',
    type: 'sitting',
    cover_image: chairCoverImage,
    steps: [
        chairStepOne,
        chairStepTwo,
        chairStepThree,
        chairStepFour,
        chairStepFive,
        chairStepSix,
    ]
}

export default chair;