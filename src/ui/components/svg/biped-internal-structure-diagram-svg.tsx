
import React from 'react';

export default class BipedInternalStructureDiagramSVG extends React.Component<IBipedInternalStructureDiagramSVGProps, IBipedInternalStructureDiagramSVGState> {
    bgColor = "rgb(255,255,255)";
    strokeColor = "rgb(0,0,0)";
    theWidth = 744;
    theHeight = 627;
    xLoc = 0;
    yLoc = 0;
    baseWidth = 744.09448819;
    baseHeight = 1052.3622047;
    constructor(props: IBipedInternalStructureDiagramSVGProps) {
        super(props);
        this.state = {
        }
        if( this.props.bgColor ) {
            this.bgColor = this.props.bgColor;
        }
        if( this.props.strokeColor ) {
            this.strokeColor = this.props.strokeColor;
        }



        if( this.props.width ) {
            this.theWidth = this.props.width;
            this.theHeight = Math.round( this.props.width / this.baseWidth * this.baseHeight );

        }

        if( this.props.xLoc  ) {
            this.xLoc = this.props.xLoc;
        }

        if( this.props.yLoc ) {
            this.yLoc = this.props.yLoc;
        }

        // if( typeof(standAlone) === "undefined" )
        //     standAlone = true;

        // if( !baseFillColor )
        //     baseFillColor = colorTan;

        // if( !lineColor )
        //     lineColor = colorGold;
    }

    render() {



        // var svg = "";

        // if( standAlone ) {
        //     var svg = "<!DOCTYPE HTML><svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xml:space=\"preserve\" height=\"" + theHeight  + " px\" width=\"" + theWidth  + "px\" viewBox=\"0 0 790 100\" ><g>\n";

        return (
                <svg
                    viewBox={"0 0 " + this.baseWidth + " " + this.baseHeight}
                    y={this.yLoc}
                    x={this.xLoc}
                    width={this.theWidth}
                    height={this.theHeight}
                    id="internalStructureDiagram" version="1.1"
                >
                    <g>
                        <path
                        id="path5320"
                        d="m 123.52522,1037.3027 c -1.83759,-5.6069 -2.97974,-10.511 -2.53811,-10.8978 0.44162,-0.3869 12.12398,-5.5467 25.9608,-11.4661 13.83681,-5.9195 27.23203,-11.8598 29.76723,-13.2006 4.275,-2.2611 4.9638,-4.54582 9.4938,-31.4915 l 4.8844,-29.05352 -7.0245,-12.54543 c -5.8167,-10.38853 -7.2309,-14.94865 -8.2258,-26.52361 -1.1706,-13.62109 -0.8562,-15.1684 12.3079,-60.57209 12.2733,-42.33083 14.0335,-47.03838 19.2394,-51.4518 3.7651,-3.19198 5.3528,-5.87743 4.6301,-7.83092 -1.4356,-3.87995 4.6558,-26.5807 8.2391,-30.70502 5.0332,-5.79304 5.5881,-12.83119 1.4426,-18.29714 -5.5172,-7.27467 -4.4023,-24.66469 1.6873,-26.31631 4.3922,-1.19128 8.0594,-20.56883 5.1472,-27.19799 -2.5429,-5.78851 -0.6901,-18.28036 2.5218,-17.00203 1.5995,0.63657 2.1308,-1.7532 1.911,-8.59555 -0.1675,-5.2125 -0.7513,-9.94072 -1.2974,-10.50717 -0.5462,-0.56645 0.1814,-2.24801 1.6169,-3.7368 1.4354,-1.48878 2.6099,-4.77002 2.6099,-7.29163 0,-2.52162 1.2594,-5.08602 2.7988,-5.69866 1.7085,-0.67997 2.3575,-2.2907 1.6662,-4.13495 -3.4328,-9.15719 -4.5149,-23.2228 -2.6316,-34.205 3.2852,-19.15644 7.3208,-31.59071 11.598,-35.73494 2.2161,-2.14715 4.4081,-6.62963 4.8711,-9.96109 0.8397,-6.04133 0.8214,-6.05721 -6.9952,-6.05721 l -7.8371,0 1.1878,-9.28677 c 0.9727,-7.60487 0.6584,-9.49746 -1.7351,-10.45006 -3.871,-1.54064 -3.687,-4.96587 0.6644,-12.36793 2.5171,-4.28181 3.5974,-9.43827 3.6214,-17.2848 0.019,-6.15039 0.6284,-12.06674 1.3545,-13.14744 0.7261,-1.08068 11.4283,-4.32362 23.7826,-7.20651 12.3543,-2.8829 23.89,-6.54358 25.635,-8.13485 3.0229,-2.75674 3.0017,-3.08189 -0.4493,-6.89178 -2.2566,-2.49132 -3.6218,-6.5463 -3.6218,-10.75751 0,-3.71745 -0.8087,-7.27732 -1.797,-7.91085 -2.3426,-1.50161 -2.3426,-13.97817 0,-13.97817 3.1981,0 1.9539,-10.18428 -1.5192,-12.4338 -1.8238,-1.18134 -4.3548,-5.99589 -5.6245,-10.69898 -2.1579,-7.99373 -2.7031,-8.55109 -8.3643,-8.55109 -7.2279,0 -7.565,-1.60732 -1.5634,-7.45502 5.783,-5.6347 5.6852,-10.61926 -0.3362,-17.13777 l -4.8287,-5.22731 5.7272,0 c 6.4624,0 8.0384,-4.52966 2.1332,-6.1313 -1.9767,-0.53613 -3.594,-2.31132 -3.594,-3.94488 0,-1.63356 -0.8651,-2.97012 -1.9225,-2.97012 -1.0573,0 -5.4831,-2.54084 -9.8351,-5.64629 -7.7959,-5.56305 -7.9461,-5.59054 -10.1902,-1.86376 -1.8515,3.07491 -4.1746,3.78254 -12.4177,3.78254 -8.6288,0 -10.2801,-0.55555 -11.0799,-3.72752 -0.5308,-2.10532 -2.4511,-3.72751 -4.4125,-3.72751 -2.9709,0 -3.8127,-2.26747 -5.8265,-15.69332 -1.2946,-8.63131 -1.8682,-19.94577 -1.2747,-25.14323 1.3043,-11.42149 -0.7774,-13.21239 -15.3574,-13.21239 -15.0276,0 -17.338,3.58698 -18.607,28.88822 -1.4552,29.01296 -4.6982,69.29498 -6.0053,74.59176 -0.9644,3.90846 -0.6437,6.35569 1.0477,7.99443 4.8818,4.72966 1.8547,20.85231 -3.915,20.85231 -2.9765,0 -3.4252,2.11836 -1.0067,4.75258 0.9699,1.05645 0.8979,9.66335 -0.1785,21.34001 -1.6166,17.53609 -2.2775,19.96906 -6.36055,23.41533 -3.68151,3.10731 -4.20621,4.53895 -2.73225,7.45503 2.9827,5.90082 -3.28279,69.33622 -7.49716,75.90605 -2.7432,4.27643 -2.97174,6.0325 -1.28483,9.87243 4.35725,9.91843 2.55384,22.64539 -5.40371,38.135 l -7.45558,14.51255 5.9917,8.0737 c 3.29543,4.44053 6.73833,9.10816 7.65089,10.37251 3.46224,4.79687 -7.38986,6.47801 -27.47568,4.25634 -29.652027,-3.27976 -28.147997,-2.60969 -34.319867,-15.29037 -5.37526,-11.04397 -5.45076,-11.59738 -5.06771,-37.14447 0.21387,-14.2634 -0.13756,-26.47941 -0.78093,-27.14671 -2.05901,-2.13551 -1.25059,-13.29971 1.0199,-14.08467 1.69375,-0.58556 1.62791,-2.52241 -0.29068,-8.55181 -2.11564,-6.64862 -2.10088,-12.34258 0.10038,-38.72285 1.92083,-23.01961 2.06476,-31.71456 0.56292,-34.00396 -1.1098,-1.69175 -3.65183,-8.1557 -5.64896,-14.36432 l -3.63114,-11.28842 5.15589,-3.06901 c 4.16439,-2.47889 5.15581,-4.35128 5.15581,-9.73735 0,-4.20812 0.99448,-7.06412 2.69549,-7.74111 3.39401,-1.3508 3.52726,-4.40151 0.19225,-4.40151 -5.3636,0 -6.50482,-14.86907 -1.54,-20.06479 1.98557,-2.07792 3.20556,-6.37161 3.30976,-11.64848 0.0908,-4.59662 0.28704,-12.97029 0.43618,-18.60816 0.14913,-5.63786 -0.21996,-13.43317 -0.82023,-17.32289 -0.79041,-5.12186 -0.29172,-7.98869 1.80831,-10.39542 2.38979,-2.73881 2.92489,-8.37768 3.04299,-32.06666 0.0788,-15.8089 -0.42674,-35.96454 -1.12345,-44.79028 l -1.26674,-16.04682 4.71917,-1.22844 c 4.779967,-1.24427 6.599507,-7.18718 2.922177,-9.54433 -2.818487,-1.80665 -2.119977,-7.77539 1.79699,-15.35515 1.97669,-3.8251 3.59398,-8.87538 3.59398,-11.22284 0,-3.49004 2.375,-5.38978 13.02817,-10.42111 l 13.02817,-6.15301 25.88008,2.38294 c 14.23406,1.31062 26.62876,3.15941 27.54376,4.10844 2.2396,2.32282 4.8826,14.59712 4.9354,22.92028 0.058,9.13565 3.2639,11.5107 13.4081,9.93296 7.96,-1.23803 8.2039,-1.47239 8.3778,-8.05261 0.3339,-12.63336 2.1121,-15.82987 10.6783,-19.19485 9.7508,-3.83031 43.0497,-4.58065 45.1727,-1.0179 1.0177,1.70787 1.8398,1.68648 3.555,-0.0925 1.2272,-1.27277 3.68,-2.31412 5.4506,-2.31412 1.7707,0 4.2294,-1.67738 5.4638,-3.72751 1.9892,-3.30342 4.1907,-3.72752 19.3499,-3.72752 15.1592,0 17.3607,0.4241 19.3498,3.72752 1.2689,2.10725 4.1906,3.72751 6.7217,3.72751 4.1504,0 4.4773,-0.65375 4.4773,-8.95318 0,-7.77327 0.823,-9.7805 6.245,-15.23095 7.3856,-7.42445 12.9795,-23.648 9.289,-26.94064 -6.1592,-5.49524 -6.8853,-8.11442 -3.6634,-13.21439 2.49,-3.94137 4.2045,-4.78425 8.425,-4.1418 4.3939,0.66884 6.5658,-0.56351 12.7177,-7.21584 14.4752,-15.652686 17.1299,-19.750265 19.294,-29.779762 l 2.1743,-10.076356 14.0824,0 14.0824,0 2.9964,11.177987 c 2.4235,9.04062 4.1148,11.86239 8.8455,14.75728 3.2171,1.968611 8.5434,7.631821 11.8363,12.584911 4.9063,7.37983 6.8309,8.90399 10.661,8.4427 3.4305,-0.41318 5.5101,0.76092 7.8179,4.41397 3.0218,4.7832 3.0042,5.17329 -0.4529,10.02295 -3.1689,4.44543 -3.3683,6.083 -1.675,13.75766 1.0572,4.79138 2.8347,8.7116 3.9501,8.7116 1.1155,0 5.0224,3.18045 8.6822,7.06767 5.767,6.12532 6.6542,8.23754 6.6542,15.84193 0,7.86761 0.4195,8.77426 4.0602,8.77426 2.2331,0 5.0702,-1.67738 6.3047,-3.72751 1.9881,-3.30182 4.1906,-3.72752 19.2854,-3.72752 15.0948,0 17.2973,0.4257 19.2854,3.72752 1.2345,2.05013 4.0042,3.72751 6.1549,3.72751 2.1508,0 4.2507,1.04836 4.6665,2.3297 0.5876,1.81073 1.3341,1.83519 3.3511,0.10977 1.6092,-1.37658 9.3244,-2.23898 20.3088,-2.27011 14.0644,-0.0398 19.5133,0.75274 26.449,3.84725 8.6407,3.85524 8.7355,3.99078 8.7627,12.52076 0.034,10.60356 1.1178,12.38391 8.4387,13.86052 8.6217,1.73898 11.3007,-2.11665 11.3007,-16.26399 0,-16.80542 1.0658,-17.4736 32.562,-20.41428 l 25.8401,-2.41258 13.0282,6.61893 c 12.0757,6.13505 13.0282,7.04926 13.0282,12.50518 0,3.23743 1.3094,7.01337 2.9099,8.39096 2.3259,2.00209 2.6926,4.66037 1.8273,13.24689 -1.0438,10.35705 -0.9183,10.78493 3.4985,11.93468 4.5089,1.1737 4.5605,1.38725 3.2755,13.53985 -0.718,6.79104 -1.3285,27.23555 -1.3566,45.43227 -0.046,29.86519 0.2668,33.326 3.2157,35.56234 2.6315,1.99575 3.0239,3.8976 2.0179,9.7815 -2.9859,17.4644 -1.3906,43.24523 2.9821,48.19218 4.72,5.34 3.6208,19.68395 -1.5085,19.68395 -3.0962,0 -3.0893,0.23786 0.1985,6.77604 1.4764,2.93611 2.6894,6.73614 2.6955,8.4445 0.01,1.70837 2.2197,4.7748 4.9191,6.81425 l 4.9081,3.70813 -3.3408,9.95956 c -1.8375,5.47777 -4.4613,11.83428 -5.8307,14.1256 -2.1292,3.56264 -2.0787,8.6523 0.3491,35.1418 2.5808,28.15941 2.5824,31.64079 0.018,38.29015 -2.5002,6.48073 -2.5138,7.43699 -0.1193,8.38995 3.0647,1.21975 3.7809,12.81172 0.9054,14.65492 -1.0635,0.68174 -1.797,12.12001 -1.797,28.02505 0,25.48512 -0.2531,27.40846 -4.9002,37.23577 -5.5525,11.7421 -4.0142,11.09405 -33.1832,13.97924 -15.3035,1.5137 -22.0163,1.52092 -24.7086,0.0265 -2.0331,-1.1285 -3.6965,-2.29018 -3.6965,-2.58152 0,-0.29133 3.213,-4.99616 7.1401,-10.45518 l 7.1401,-9.92549 -8.0386,-15.29494 c -8.7949,-16.73392 -10.2369,-26.53501 -5.3469,-36.3426 2.4603,-4.93437 2.3929,-5.92829 -0.7831,-11.55592 -4.5221,-8.01295 -10.2854,-68.39799 -7.1145,-74.543 1.6793,-3.2544 1.2469,-4.46258 -2.7929,-7.80348 -4.3711,-3.61486 -4.9411,-5.66956 -6.6658,-24.02704 -1.4568,-15.50747 -1.3841,-20.70123 0.3199,-22.83071 1.7893,-2.236 1.6672,-2.75657 -0.6465,-2.75657 -6.0736,0 -9.0678,-15.78352 -3.9927,-21.04714 1.419,-1.4717 1.9191,-3.41865 1.1115,-4.32658 -1.9117,-2.149 -5.9068,-51.42854 -5.7181,-70.53195 0.151,-15.27455 -3.4643,-32.28752 -7.4138,-34.88867 -2.6171,-1.72366 -17.7668,-2.03015 -21.7615,-0.44026 -2.2767,0.90609 -2.5655,3.71755 -1.6954,16.50448 0.7202,10.58474 0.408,15.82305 -0.9969,16.72357 -1.1259,0.72121 -2.0464,4.12857 -2.0464,7.57197 0,8.60763 -1.5947,12.15686 -5.4622,12.15686 -1.8043,0 -3.7939,1.67738 -4.4213,3.72751 -1.6303,5.32757 -19.2874,5.4661 -22.8577,0.1793 -2.3054,-3.41364 -2.7862,-3.29712 -12.6809,3.07342 -5.6565,3.64193 -10.2846,7.75469 -10.2846,9.13949 0,1.38481 -1.2129,2.51785 -2.6955,2.51785 -1.4825,0 -2.6954,1.25803 -2.6954,2.79563 0,1.89048 1.8239,2.79564 5.6333,2.79564 l 5.6333,0 -4.7348,3.86278 c -6.4255,5.2421 -6.4593,14.31622 -0.076,20.50712 l 4.6585,4.51832 -6.7643,0.93188 c -6.165,0.84932 -7.0009,1.67496 -9.435,9.31879 -1.4689,4.61279 -4.1602,9.48283 -5.9807,10.82227 -3.9899,2.93568 -4.3543,9.3804 -0.6145,10.86882 1.6357,0.65101 2.6955,3.46936 2.6955,7.16832 0,3.35256 -1.213,7.13962 -2.6955,8.41572 -1.4825,1.2761 -2.6955,5.29654 -2.6955,8.93429 0,3.66446 -1.3918,8.2092 -3.1208,10.1908 -2.9146,3.34024 -2.9217,3.72775 -0.1066,5.86261 1.6578,1.25727 12.9681,4.68465 25.134,7.61637 12.7906,3.08228 22.9929,6.54844 24.1901,8.21835 1.1387,1.58833 2.3708,9.05829 2.738,16.59989 0.5144,10.56408 1.3798,14.12535 3.7698,15.51258 4.1452,2.40593 3.9241,6.64273 -0.4959,9.50565 -3.0817,1.99602 -3.4354,3.60361 -2.464,11.19834 l 1.1342,8.86774 -9.2164,0 c -8.931,0 -9.2165,0.16419 -9.2165,5.3024 0,2.91674 1.6001,6.80426 3.5563,8.64042 8.9417,8.39277 16.5594,46.2778 12.6985,63.15278 -1.8655,8.15324 -1.7692,10.39637 0.6503,15.16035 1.5618,3.0752 2.8446,7.05898 2.8507,8.85285 0,1.79386 0.6176,3.26224 1.3588,3.26306 1.7105,0.002 1.6501,16.14817 -0.067,17.92908 -2.2632,2.34731 -1.3657,4.86716 1.3488,3.78684 3.5433,-1.41022 5.717,10.50642 3.0315,16.61939 -2.8342,6.45143 0.4763,23.22387 5.3388,27.04889 5.8034,4.56522 6.7955,19.01947 1.7875,26.04479 -4.3718,6.13284 -3.7667,13.14491 1.6795,19.46304 3.7822,4.38779 9.5768,26.21857 8.0527,30.33799 -0.6608,1.78602 1.0172,4.66017 4.4898,7.69016 4.9126,4.28647 7.0809,10.04574 19.0129,50.50029 13.2687,44.98697 13.4508,45.88122 12.3191,60.48802 -0.9581,12.36437 -2.2928,17.00605 -8.039,27.95635 l -6.8902,13.13037 4.3151,25.16072 c 2.3734,13.83839 4.7209,26.92444 5.2168,29.0801 0.6873,2.98786 6.3546,6.2817 23.8453,13.859 12.619,5.4667 26.3123,11.4689 30.4295,13.3381 l 7.486,3.3986 -2.873,7.9032 c -1.5801,4.3468 -3.6327,8.9515 -4.5612,10.2329 -1.2992,1.7929 -17.5795,2.3297 -70.6523,2.3297 l -68.9641,0 0,-4.7337 c 0,-7.5079 6.5119,-18.7578 13.4216,-23.1869 3.4899,-2.237 6.3453,-4.7209 6.3453,-5.5196 0,-4.7607 -7.8529,-40.34625 -9.0811,-41.15082 -0.8165,-0.5349 -1.7354,-5.56695 -2.042,-11.1823 l -0.5573,-10.20975 -7.3329,-1.59627 c -7.255,-1.57931 -7.4307,-1.81713 -16.5318,-22.36532 l -9.1989,-20.76904 -1.8967,-44.73016 c -1.7019,-40.13458 -1.5906,-45.61609 1.0834,-53.35327 2.9098,-8.41926 2.8534,-9.19034 -2.3831,-32.61574 -4.5139,-20.19222 -6.0192,-24.33494 -9.5031,-26.15377 -2.2768,-1.18863 -4.8266,-3.28535 -5.6663,-4.65939 -2.1883,-3.58072 -1.9385,-17.89156 0.3377,-19.35058 1.0557,-0.67673 1.5418,-2.25131 1.0801,-3.49907 -0.4616,-1.24777 -0.2254,-5.75117 0.5251,-10.00752 1.2072,-6.84692 0.7029,-8.76545 -4.3756,-16.64631 -3.4587,-5.36723 -8.7704,-19.10733 -13.3645,-34.5709 -7.0809,-23.83411 -7.4798,-26.29185 -5.596,-34.4795 1.1156,-4.84884 2.0001,-9.65476 1.9656,-10.67983 -0.063,-1.87641 -9.5944,-55.88204 -12.0058,-68.02711 l -1.2952,-6.52315 -1.2854,5.59127 c -0.7069,3.0752 -1.4033,10.20407 -1.5475,15.84193 -0.2187,8.55112 -1.5437,12.4137 -7.9915,23.29696 l -7.7293,13.04629 -37.5951,0.4885 -37.5951,0.48847 -8.3423,-15.39853 c -7.1216,-13.14515 -8.507,-17.40901 -9.4671,-29.13709 -1.1943,-14.58908 -3.5938,-22.18933 -5.3714,-17.01344 -0.5281,1.5376 -3.8062,19.92887 -7.2848,40.8695 -5.3877,32.43323 -6.0196,39.12985 -4.2656,45.2016 1.5532,5.37671 1.5473,8.29256 -0.024,11.86932 -1.1457,2.60788 -2.0831,6.62252 -2.0831,8.92144 0,7.41999 -10.8461,40.42718 -16.3115,49.63965 -4.4317,7.47002 -5.1849,10.43922 -4.5692,18.01152 0.4055,4.98685 1.6406,11.45515 2.7447,14.37398 2.8617,7.56564 -0.442,19.37187 -6.1795,22.08318 -2.402,1.13507 -4.7267,3.40417 -5.1661,5.04249 -0.4394,1.6383 -2.9748,12.89975 -5.6343,25.02543 -4.7141,21.49392 -4.757,22.2269 -1.7105,29.2339 2.8865,6.63886 2.9664,10.71563 1.0471,53.43545 l -2.0777,46.24824 -9.173,19.87894 c -9.0575,19.62888 -9.2715,19.90468 -17.0112,21.92598 l -7.8382,2.04704 0,9.85107 c 0,5.41809 -0.7316,10.64783 -1.6257,11.62164 -0.8942,0.97382 -3.3353,10.56132 -5.4248,21.30554 l -3.7991,19.53493 4.077,3.2653 c 2.2424,1.7959 5.2901,3.6932 6.7726,4.2163 3.1048,1.0955 8.9849,14.8579 8.9849,21.0293 l 0,4.1739 -69.7907,0 -69.79066,0 -3.34105,-10.1945 z m 132.98472,-2.9606 c -1.5631,-3.135 -6.2858,-7.8574 -10.4949,-10.4943 l -7.6529,-4.7943 4.1578,-21.30908 c 2.2868,-11.72001 5.1215,-23.14236 6.2994,-25.383 1.1779,-2.24065 2.1894,-9.06342 2.2478,-15.1617 l 0.1062,-11.08779 8.0864,-1.95851 c 7.9772,-1.93204 8.2006,-2.19927 16.5297,-19.77047 l 8.4433,-17.81196 2.0523,-44.41112 c 1.9056,-41.2367 1.8244,-44.93515 -1.1353,-51.74258 -2.639,-6.06962 -2.8697,-8.83287 -1.3406,-16.0547 10.3773,-49.0103 10.273,-48.66379 15.1944,-50.44893 7.1889,-2.60756 8.3745,-10.6075 2.5125,-16.95335 -3.9466,-4.27243 -4.267,-5.38146 -2.0951,-7.251 1.93,-1.6612 2.1905,-3.92216 1.0536,-9.14118 -1.3484,-6.19012 -0.7776,-8.13385 5.3208,-18.11661 4.4111,-7.22075 9.2849,-19.66064 13.7566,-35.11282 l 6.9253,-23.93028 -3.1125,-9.08929 c -2.2349,-6.52614 -2.6022,-10.02656 -1.3026,-12.41297 1.7521,-3.21727 9.4491,-45.37847 11.9201,-65.2936 l 1.2141,-9.78472 -36.0502,0 c -39.6956,0 -36.103,-1.10978 -38.9477,12.03107 -0.6558,3.02937 -2.6877,6.59425 -4.5154,7.92197 -7.8782,5.72317 -14.2517,42.70808 -9.9277,57.60958 1.4055,4.84358 2.2128,9.38148 1.7941,10.08421 -0.4188,0.70274 -1.2025,4.96268 -1.7416,9.46656 -0.5391,4.50388 -2.1805,14.78136 -3.6475,22.83886 -1.4671,8.05751 -2.6674,14.95037 -2.6674,15.31749 0,0.36712 -1.343,0.13307 -2.9844,-0.52025 -2.4886,-0.99044 -2.737,-0.43893 -1.4957,3.32008 0.8187,2.4793 1.3108,10.51172 1.0934,17.84985 -0.2523,8.51657 0.3581,13.82488 1.6876,14.67708 2.7317,1.75098 -1.3083,4.52854 -6.6444,4.56809 -6.8662,0.0509 -8.3898,12.14826 -2.2551,17.9063 3.1328,2.94054 3.595,4.92477 2.7089,11.6301 -0.5877,4.44657 -2.7757,10.57127 -4.8622,13.61046 -5.0921,7.41691 -9.0058,23.19458 -7.0302,28.34179 1.2719,3.31367 0.3242,5.17088 -5.3808,10.54518 -6.5941,6.21195 -7.536,8.64956 -19.7436,51.09722 -12.0774,41.99468 -12.7471,45.2723 -11.5734,56.64006 0.9449,9.15082 2.9635,15.15585 8.3551,24.85489 l 7.1092,12.78888 -4.7811,30.28202 c -2.6296,16.65513 -5.1276,31.57537 -5.5511,33.15607 -0.4483,1.6735 -12.4551,7.8664 -28.74128,14.8244 -15.38423,6.5727 -28.37362,12.6254 -28.86529,13.4505 -0.49167,0.8251 -0.38294,3.1701 0.24163,5.211 1.10566,3.6134 2.80917,3.7108 64.85364,3.7108 l 63.7181,0 -2.842,-5.7 z m 415.1535,1.9892 c 0.6246,-2.0409 0.7413,-4.3726 0.2593,-5.1815 -0.482,-0.8088 -13.4174,-6.8969 -28.7452,-13.5289 l -27.8689,-12.0583 -2.0243,-12.11438 c -1.1134,-6.66293 -3.6854,-21.45158 -5.7156,-32.86368 l -3.6913,-20.74928 7.243,-12.86249 c 5.8535,-10.39497 7.469,-15.35303 8.421,-25.84466 1.1242,-12.39016 0.5949,-14.97934 -11.6071,-56.78042 -12.1242,-41.53418 -13.1434,-44.13549 -19.7168,-50.32143 -5.6714,-5.33706 -6.6599,-7.25447 -5.4364,-10.54518 1.9182,-5.15934 -2.2878,-22.0291 -7.216,-28.94257 -2.0291,-2.84654 -4.1627,-8.75725 -4.7412,-13.13494 -0.8681,-6.56881 -0.392,-8.57881 2.7254,-11.50484 3.7414,-3.51165 4.9483,-11.22947 2.4021,-15.36017 -0.7261,-1.178 -3.3419,-2.43643 -5.8127,-2.79655 -3.3527,-0.48862 -4.3362,-1.60024 -3.8763,-4.38133 0.3389,-2.04965 0.4113,-7.08138 0.1608,-11.18165 -0.7069,-11.57512 -0.4632,-16.39925 1.0755,-21.28162 1.1694,-3.71057 0.9045,-4.30241 -1.4976,-3.34638 -2.2761,0.9059 -3.1543,-0.35769 -3.9911,-5.74285 -0.5901,-3.79734 -1.896,-10.81249 -2.902,-15.58918 -1.006,-4.7767 -1.6416,-10.22819 -1.4125,-12.11442 0.2291,-1.88623 -0.048,-4.68755 -0.6157,-6.22515 -2.4363,-6.59778 -2.4418,-8.78139 -0.04,-15.84194 4.7081,-13.84018 -1.6008,-50.07815 -10.412,-59.80573 -2.1984,-2.42704 -4.4923,-7.57613 -5.0976,-11.44242 l -1.1005,-7.02963 -36.3597,-0.50453 c -27.8449,-0.38638 -36.3598,0.0325 -36.3598,1.7887 0,5.27931 11.007,68.02945 12.6238,71.9677 1.2724,3.09914 0.9415,6.89591 -1.1898,13.65403 l -2.9521,9.36114 6.7292,22.68923 c 3.7742,12.72551 9.7831,28.02413 13.6836,34.83775 5.8592,10.23549 6.7833,13.24122 5.8685,19.08774 -0.7177,4.58722 -0.2539,7.97876 1.3685,10.00623 2.1254,2.65613 1.9159,3.43775 -1.5643,5.83437 -2.8605,1.96983 -4.0186,4.60971 -4.0186,9.16013 0,5.3043 0.8447,6.69817 4.961,8.18642 4.6471,1.68019 5.3295,3.41296 10.788,27.39346 6.6587,29.25322 6.7995,31.08736 3.0929,40.28817 -2.3674,5.87641 -2.4642,12.50571 -0.7438,50.8852 l 1.9781,44.12852 8.3811,17.83548 c 8.2816,17.62396 8.4769,17.85853 16.4674,19.78063 l 8.0865,1.94516 1.0914,10.16926 c 0.9752,9.08626 9.3446,52.4391 11.4988,59.5626 0.5454,1.8036 -2.0438,4.696 -7.2778,8.1304 -4.4684,2.9319 -9.3319,7.7527 -10.8078,10.7127 l -2.6834,5.3819 63.7182,0 c 62.0445,0 63.748,-0.097 64.8537,-3.7108 z M 140.65845,623.29478 c 0,-0.62129 -2.45598,-4.34574 -5.45772,-8.27657 l -5.45771,-7.14697 8.1532,-15.63951 c 8.91265,-17.0963 10.37102,-26.91203 5.46142,-36.75887 -2.4941,-5.00229 -2.39513,-5.91782 1.34775,-12.46775 3.30155,-5.77761 4.54444,-12.63407 6.80344,-37.53149 2.61864,-28.86125 2.59503,-30.7505 -0.44925,-35.94242 -3.32745,-5.67484 -4.64847,-12.44106 -1.41619,-7.25363 1.52701,2.45067 1.74534,2.43203 1.76948,-0.15096 0.0144,-1.62065 1.94613,-4.01161 4.29113,-5.31324 3.34501,-1.85671 4.50315,-4.43429 5.37535,-11.96342 1.61472,-13.93888 1.38976,-26.29356 -0.51579,-28.32757 -0.91231,-0.97381 -1.22236,-4.07697 -0.68902,-6.8959 0.73344,-3.87633 2.01348,-5.12533 5.2527,-5.12533 5.9841,0 5.9107,-6.96029 -0.09,-8.52231 -4.59428,-1.19593 -4.60337,-2.00046 -0.1461,-12.91089 2.0024,-4.9012 4.8169,-34.93649 7.1607,-76.41402 1.2259,-21.69383 2.7417,-28.63458 6.5259,-29.88025 1.8762,-0.61762 3.4113,-2.80032 3.4113,-4.85045 0,-3.0547 0.7298,-3.46456 4.0432,-2.27073 2.2238,0.80123 6.8735,1.48678 10.3327,1.52342 l 6.2894,0.0665 0.5063,-21.89915 0.5063,-21.89914 -8.8738,0 c -7.8121,0 -8.7676,-0.42077 -7.9869,-3.51717 0.4878,-1.93444 0.01,-4.08067 -1.0667,-4.76938 -1.0745,-0.68872 -1.9659,-6.02519 -1.9811,-11.85882 -0.014,-5.83364 -0.7587,-11.80504 -1.6525,-13.26979 -1.1503,-1.8852 -8.3601,-3.26308 -24.68104,-4.71681 -22.82559,-2.03311 -23.15839,-2.00649 -33.28979,2.66317 -8.32746,3.83821 -10.46341,5.75322 -11.46684,10.28075 -0.67823,3.06017 -2.39753,7.40705 -3.82068,9.65975 -1.94504,3.0788 -2.10962,5.02197 -0.66283,7.82577 1.05861,2.05154 1.92473,7.13992 1.92473,11.30758 0,6.8564 -0.431,7.57755 -4.52875,7.57755 l -4.52874,0 1.17786,18.17163 c 0.64782,9.99439 1.80657,19.01032 2.57501,20.03538 0.76844,1.02507 0.69427,5.63787 -0.16483,10.25066 -0.8591,4.6128 -1.59721,14.55033 -1.64026,22.08341 -0.0496,8.67283 -1.15768,16.05575 -3.021187,20.12871 -2.15229,4.70414 -2.46964,7.53373 -1.18124,10.53233 1.09661,2.55221 1.1946,10.05051 0.25958,19.86146 -0.96046,10.07789 -0.85851,16.42884 0.28274,17.6125 0.981677,1.01815 1.784867,4.19951 1.784867,7.06969 0,4.32392 -0.77013,5.21852 -4.492467,5.21852 -5.59196,0 -6.29997,6.60884 -0.89849,8.3869 4.365347,1.437 4.947457,10.49297 0.89849,13.97818 -1.48251,1.2761 -2.69548,5.08295 -2.69548,8.45967 0,4.44886 -1.2742,7.10216 -4.62723,9.63543 l -4.62723,3.49594 3.109,8.30798 c 1.70994,4.56939 4.19652,9.63206 5.52572,11.25038 1.3292,1.61832 2.41673,3.92472 2.41673,5.12533 0,1.20061 0.80864,2.18294 1.79699,2.18294 2.787297,0 2.11799,6.85585 -0.98333,10.0724 -4.31688,4.47728 -7.51721,45.25005 -4.36817,55.65127 2.37004,7.82817 2.4619,14.48823 0.22458,16.28163 -0.6394,0.51253 -0.75822,14.77027 -0.26405,31.68386 0.7827,26.78867 1.39512,31.71279 4.75188,38.20701 l 3.853387,7.45503 16.81198,2.06886 c 22.11158,2.72105 23.10145,2.78365 23.10145,1.46091 z m 550.72009,-2.22591 c 10.1506,-1.23494 10.943,-1.70409 14.7956,-8.75937 3.746,-6.86014 4.0729,-9.78277 4.1001,-36.65341 0.022,-21.57041 0.6164,-29.45462 2.2758,-30.17787 1.6086,-0.70109 1.3535,-1.56509 -0.8985,-3.04355 -3.8782,-2.5461 -3.9758,-6.81617 -0.3607,-15.78973 2.3643,-5.86873 2.5006,-10.04764 0.9046,-27.71803 -1.0336,-11.44406 -1.8821,-22.27512 -1.8855,-24.06898 0,-1.79387 -1.2191,-3.26158 -2.7016,-3.26158 -1.797,0 -2.6955,-1.86375 -2.6955,-5.59127 0,-3.0752 0.6112,-5.59127 1.3583,-5.59127 1.7758,0 9.1408,-16.70475 10.5213,-23.86369 0.8818,-4.57265 0.3927,-5.80616 -2.7062,-6.82627 -2.8569,-0.94043 -3.7824,-2.77791 -3.7824,-7.50952 0,-3.44543 -1.1144,-7.42021 -2.4764,-8.83283 -1.362,-1.41261 -3.0219,-5.14462 -3.6888,-8.2933 -1.0762,-5.08237 -0.684,-5.86243 3.4943,-6.9501 5.6962,-1.48279 5.4756,-7.32654 -0.309,-8.18583 -4.4357,-0.65891 -6.7935,-7.38092 -3.8702,-11.03411 1.3079,-1.63442 1.625,-8.23385 0.9303,-19.35626 -0.6886,-11.02222 -0.3368,-18.50936 1.0139,-21.5841 1.7227,-3.92127 1.5499,-5.10087 -1.0343,-7.06067 -2.4461,-1.85507 -3.2512,-5.98147 -3.8053,-19.50293 -0.3866,-9.43253 -1.1823,-17.64722 -1.7682,-18.2549 -1.5955,-1.65483 -1.2838,-11.83234 0.5676,-18.52734 0.898,-3.2476 1.8996,-12.46766 2.2257,-20.48902 0.5569,-13.69933 0.36,-14.61891 -3.245,-15.15474 -2.9341,-0.43611 -4.0376,-2.19159 -4.6863,-7.45502 -0.4666,-3.78652 -0.1455,-7.68134 0.7137,-8.65515 2.3521,-2.66604 1.777,-8.96055 -1.1905,-13.02977 -1.4511,-1.98979 -2.6384,-5.54215 -2.6384,-7.89413 0,-3.35383 -2.229,-5.41071 -10.3327,-9.53466 l -10.3327,-5.25832 -22.4866,2.05345 c -12.3676,1.12939 -23.4865,2.69437 -24.7086,3.47772 -1.389,0.89039 -2.2219,5.88286 -2.2219,13.31871 0,6.54193 -0.8087,12.41277 -1.797,13.04629 -0.9884,0.63353 -1.797,2.77975 -1.797,4.76939 0,3.04493 -1.28,3.61752 -8.0865,3.61752 l -8.0864,0 0,22.61048 0,22.61048 6.7387,-0.99364 c 3.7063,-0.54649 8.1538,-1.58535 9.8834,-2.30856 2.1989,-0.91943 3.1448,-0.43383 3.1448,1.61455 0,1.6112 1.5119,3.7687 3.3599,4.79446 4.805,2.66709 9.1022,22.37074 8.9936,41.23735 -0.1409,24.47904 3.768,63.74022 6.6843,67.13719 3.7062,4.31708 3.1419,10.434 -1.068,11.57581 -5.5274,1.49917 -4.7823,8.77876 0.8985,8.77876 3.8844,0 4.4925,0.83249 4.4925,6.1504 0,3.38272 -0.7967,6.97673 -1.7705,7.98668 -1.0749,1.11481 -1.3104,8.02469 -0.5994,17.58691 1.0571,14.21758 1.6667,16.2017 6.263,20.38471 5.3104,4.833 6.2922,9.17785 3.3585,14.86326 -1.142,2.21308 -0.8182,13.72157 0.9491,33.73075 2.1308,24.12486 3.4796,31.84239 6.5578,37.52286 3.7285,6.88041 3.7606,7.4007 0.8479,13.73576 -4.7069,10.23717 -3.7347,16.65306 5.059,33.38463 4.4475,8.4623 8.0864,16.40524 8.0864,17.65099 0,1.24573 -2.0216,5.01393 -4.4924,8.37377 -2.4709,3.35983 -4.4925,6.68753 -4.4925,7.39486 0,0.70735 3.8411,0.79581 8.5357,0.19655 4.6946,-0.59925 13.3619,-1.67673 19.2607,-2.39437 z m -248.1235,-39.92576 c 4.1583,-7.65302 5.6302,-12.02778 4.3276,-12.86272 -3.143,-2.01465 -0.6296,-31.68332 2.9116,-34.36889 2.4117,-1.82897 2.8402,-7.35332 2.8402,-36.61238 0,-30.32287 0.8627,-40.67714 7.188,-86.27486 l 7.1879,-51.81646 0,-93.62378 0,-93.62379 -4.3522,-2.95761 -4.3521,-2.95761 -0.091,14.49698 c -0.1842,29.23188 -10.3936,49.21266 -30.3351,59.369 -9.0995,4.63443 -12.1526,5.21645 -26.4593,5.04411 -20.3042,-0.24458 -31.9897,-4.95631 -42.237,-17.0305 -9.0241,-10.63275 -13.9618,-24.42873 -15.4739,-43.23386 -2.8178,-35.04203 -4.2853,-6.72765 -4.2853,82.67872 l 0,95.61793 6.2895,45.24124 c 5.6304,40.50068 6.2894,49.41322 6.2894,85.05646 l 0,39.81523 4.4925,0 c 4.4739,0 4.4925,0.0725 4.4925,17.55038 0,11.88272 -0.6886,17.78842 -2.1322,18.2875 -1.3687,0.47319 0.2864,4.86625 4.6226,12.26973 l 6.7547,11.53261 33.0102,0 33.0101,0 6.3015,-11.59743 z m -99.8036,-52.7872 c 0.3475,-0.33235 0.6405,-16.80363 0.6511,-36.60286 0.014,-26.31399 -0.9845,-43.51967 -3.7118,-63.95498 -2.052,-15.37599 -4.0922,-31.73046 -4.5336,-36.34325 -0.4415,-4.6128 -1.6484,-12.16102 -2.682,-16.77381 -1.156,-5.15853 -1.9095,-41.20878 -1.9576,-93.65378 l -0.078,-85.26686 -5.1125,0 c -2.8303,0 -6.5643,-1.66394 -8.365,-3.72752 -2.6395,-3.02507 -5.5346,-3.72751 -15.3628,-3.72751 -10.9756,0 -12.6512,0.52395 -17.8814,5.59127 -4.3667,4.23067 -7.474,5.59127 -12.769,5.59127 -3.8489,0 -6.9979,-0.77248 -6.9979,-1.71662 0,-2.42596 -28.3724,-2.26437 -35.9398,0.20469 -8.0653,2.6315 -8.9241,4.14898 -8.9574,15.82642 -0.024,8.58347 -0.4763,9.7212 -4.0708,10.25066 -3.9271,0.57846 -4.0575,1.29382 -4.5421,24.91246 l -0.4988,24.31688 4.9913,1.82278 4.9914,1.82275 0.045,20.45426 c 0.051,22.84776 1.1557,28.00116 6.3035,29.39734 1.9439,0.52723 3.5345,2.29518 3.5345,3.92874 0,4.5104 10.1813,3.91704 12.9959,-0.75739 3.1478,-5.22775 8.5571,-4.64378 16.7835,1.8119 3.8824,3.04669 8.784,5.56276 10.8925,5.59127 2.2961,0.0311 4.2105,1.54683 4.7734,3.77937 0.5624,2.23017 2.4512,3.72751 4.7021,3.72751 3.5753,0 3.7622,0.95575 3.7622,19.23744 0,21.16068 3.3848,35.43057 9.1652,38.63906 2.6204,1.45452 3.4137,3.95862 3.4137,10.77531 0,4.88426 -0.9703,9.8869 -2.1564,11.11697 -1.6771,1.73951 -1.6771,2.73352 0,4.47302 1.1861,1.23008 2.1564,5.84288 2.1564,10.25066 0,7.30593 0.397,8.01416 4.4925,8.01416 4.1264,0 4.4925,0.68338 4.4925,8.3869 0,7.05939 -0.5521,8.38691 -3.4879,8.38691 -1.9184,0 -3.9471,0.77055 -4.5083,1.71232 -0.5612,0.94178 -8.4932,3.50716 -17.6267,5.70084 -9.1335,2.1937 -19.6388,4.81023 -23.3451,5.81455 l -6.7387,1.82602 0,11.66982 c 0,6.4184 -0.8127,12.51275 -1.806,13.54298 -1.0827,1.12294 -1.3429,6.46899 -0.6497,13.34786 l 1.1564,11.47468 14.5763,0.53713 c 16.555,0.61007 78.9383,-0.4921 79.8997,-1.41162 z m 214.6149,-23.59397 c -0.2927,-13.47207 -0.8428,-24.81681 -1.2224,-25.21057 -0.3797,-0.39374 -10.6052,-3.14345 -22.7234,-6.11046 -12.1182,-2.967 -22.8803,-6.2732 -23.9157,-7.34707 -1.0354,-1.07388 -3.3381,-1.95251 -5.1171,-1.95251 -2.6356,0 -3.2346,-1.55313 -3.2346,-8.38691 0,-7.14439 0.5325,-8.3869 3.594,-8.3869 2.9413,0 3.594,-1.24251 3.594,-6.84234 0,-3.86968 1.35,-8.38948 3.1073,-10.40347 2.9451,-3.37523 2.9451,-3.65529 0,-5.36469 -5.0136,-2.91 -4.241,-17.49117 1.2015,-22.67501 6.59,-6.27687 10.0671,-20.03959 10.0671,-39.84743 0,-15.77255 0.3119,-17.37368 3.3844,-17.37368 1.8731,0 3.804,-1.66448 4.3242,-3.72751 0.5272,-2.09093 2.4511,-3.72752 4.3819,-3.72752 1.8932,0 6.6186,-2.49273 10.501,-5.53942 8.247,-6.47186 14.2414,-7.14963 16.9422,-1.9156 1.2798,2.48015 3.7626,3.72751 7.4194,3.72751 3.9847,0 5.7545,-1.02499 6.4359,-3.72751 0.5169,-2.05014 2.3563,-3.72752 4.0876,-3.72752 4.2585,0 6.1804,-11.12472 5.6745,-32.84537 -0.3662,-15.72221 -0.12,-17.07835 3.2677,-17.99716 3.4603,-0.93852 3.6637,-2.40028 3.6637,-26.32888 0,-20.89216 -0.457,-25.3352 -2.6062,-25.3352 -1.8539,0 -2.9609,-3.25086 -3.8348,-11.26187 -1.1485,-10.52895 -1.6173,-11.43039 -7.2043,-13.85152 -6.5859,-2.85398 -36.109,-3.42914 -37.7145,-0.73474 -1.3469,2.26024 -15.1287,2.03753 -15.1287,-0.24447 0,-1.02506 -1.1846,-1.86375 -2.6323,-1.86375 -1.4478,0 -3.4978,-1.67738 -4.5557,-3.72752 -1.6585,-3.21403 -3.7626,-3.72751 -15.2744,-3.72751 -11.5118,0 -13.6159,0.51348 -15.2744,3.72751 -1.3553,2.62646 -3.7626,3.72752 -8.1497,3.72752 l -6.2262,0 0,86.43708 c 0,72.29225 -0.4374,87.52281 -2.6729,93.07193 -1.4836,3.6825 -2.2163,9.0028 -1.6468,11.95635 0.5644,2.92682 -1.063,20.26587 -3.6165,38.53125 -3.6981,26.45239 -4.6427,40.37139 -4.6427,68.40643 l 0,35.19665 48.1395,-0.0518 48.1395,-0.0518 -0.5321,-24.49465 z M 421.76154,234.78795 c 12.5851,-4.88366 22.6669,-16.34707 27.0302,-30.73453 4.428,-14.60104 4.1018,-40.84501 -0.7054,-56.75073 l -3.6614,-12.11442 3.9787,-3.1341 c 4.9554,-3.90352 3.1015,-6.36345 -2.4666,-3.27279 -2.2643,1.25685 -4.3579,1.51448 -4.6603,0.57349 -1.8717,-5.82364 -13.186,-20.81511 -18.4911,-24.50064 -4.6704,-3.24461 -7.1454,-7.003685 -9.6143,-14.602583 l -3.3248,-10.233174 -8.2824,0.560427 -8.2824,0.560427 -2.7687,9.68206 c -2.1467,7.507059 -4.3834,10.899233 -9.9566,15.100363 -3.9534,2.98006 -9.988,10.05763 -13.4102,15.72793 -6.0501,10.02439 -6.3376,10.2313 -10.3888,7.4782 -5.0591,-3.43803 -8.1373,-1.21449 -3.3474,2.41805 1.8682,1.41682 4.0405,2.81596 4.8272,3.10919 0.7868,0.29324 -0.084,5.14595 -1.9345,10.78382 -6.7627,20.60086 -6.1967,50.74814 1.2407,66.08419 5.58,11.50593 17.1642,21.53645 29.2908,25.36226 8.7908,2.77338 24.8623,1.80825 34.9273,-2.09744 z"
                    style={{fill: this.strokeColor}}
                >
        </path>
        </g>
        </svg>
      );
    }
}

interface IBipedInternalStructureDiagramSVGProps {
    bgColor?: string;
    strokeColor?: string;

    yLoc?: number;
    xLoc?: number;

    width?: number;
}

interface IBipedInternalStructureDiagramSVGState {
}