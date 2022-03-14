//navigation bar mixin js
//for showing position in navi-bar with highlight
export default function navbar(className) {
    return {
        //pass parameter classname (this.classname)
        data(){
            return{
                className: className
            }
        },

        //create barScroll function in the lifecycle hook[created]
        created() {
            this.barScroll = () => {
                //get id positions
                const idItems = document.getElementsByClassName(this.className)[0].getElementsByTagName("h3");
                // console.log(this.className);
                // console.log(idItems.length);

                //add positions to a array
                var posArr = Array(idItems.length);
                for (let i = 0; i < idItems.length; i++) {
                    posArr[i] = idItems[i].offsetTop + 100;
                }
                // adjust positions
                posArr.splice(posArr.length - 1, 1, posArr.slice(-1)[0] - 200);
                posArr.splice(posArr.length - 2, 1, posArr.slice(-2)[0] - 100);
                posArr.splice(posArr.length - 3, 1, posArr.slice(-3)[0] - 50);
                // console.log(posArr);

                //get left-nav-item
                const navItems = document.getElementsByClassName("left-nav-item");
                // console.log(navItems.length);

                //get scroll position
                var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                // console.log(scrollPos);

                //compare scroll position with id positions
                var itemNum;
                for (let i = 0; i < posArr.length; i++) {
                    if (scrollPos < posArr[i]) {
                        itemNum = i;
                        break;
                    } else {
                        itemNum = posArr.length - 1;
                    }
                }
                // console.log(itemNum);

                // small navigation bar(width<768px), big navigation bar(width>768px)
                var navSmall, navBig;
                navSmall = itemNum;
                navBig = itemNum + navItems.length / 2;
                // console.log(navSmall,navBig);

                // add or remove highlight
                for (let i = 0; i < navItems.length; i++) {
                    navItems[i].classList.remove('highlight');
                }
                navItems[navSmall].classList.add('highlight');
                navItems[navBig].classList.add('highlight');
            }
        },
        //addEventListener in the lifecycle hook[mounted]
        mounted() {
            window.addEventListener('scroll', this.barScroll, true);
        },
        //removeEventListener in the lifecycle hook[beforeDestroy]
        beforeDestroy() {
            window.removeEventListener('scroll', this.barScroll, true);
        }
    }
}

