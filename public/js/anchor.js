//anchor mixin method js
export const anchor = {
    methods: {
        //anchor point positioning function
        anchor(idValue) {
            const returnEle = document.querySelector(idValue);
            if (!!returnEle) {
                //apply smooth scroll to anchor links
                returnEle.scrollIntoView({behavior: "smooth"});
            }
        }
    }
}