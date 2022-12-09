import { FunctionComponent } from "react";
import { Button, TextField } from "@mui/material";

const LandingPage: FunctionComponent = () => {
  return (
    <div className="relative rounded-[12px] bg-gray-100 w-full h-[4859px] overflow-hidden text-center text-base text-gray-500 font-plus-jakarta-sans">
      <div className="absolute top-[0px] left-[0px] w-[1440px] h-[682px] overflow-hidden text-[64px]">
        <img
          className="absolute top-[0px] left-[0px] w-[1747px] h-[1037px] opacity-[0.7]"
          alt=""
          src="../group-17855.svg"
        />
        <div className="absolute top-[154px] left-[164px] w-[1111px] h-[395px]">
          <div className="absolute top-[0px] left-[0px] flex flex-col items-center justify-start gap-[42px]">
            <div className="flex flex-col items-start justify-start gap-[26px]">
              <b className="relative inline-block w-[1111px]">
                <p className="[margin-block-start:0] [margin-block-end:0px]">
                  <span>{`Beautiful, high converting email templates at a `}</span>
                  <span className="[background:linear-gradient(98.41deg,_#4568dc,_#b06ab3)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">{`Fraction `}</span>
                </p>
                <p className="m-[0]">
                  <span className="[background:linear-gradient(98.41deg,_#4568dc,_#b06ab3)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    of the Cost
                  </span>
                </p>
              </b>
              <div className="relative text-base inline-block w-[1111px]">
                Platform is only optimized for klaviyo
              </div>
            </div>
            <Button
              sx={{
                width: 329,
                borderRadius: "1000px",
                backgroundColor: "black",
              }}
              variant="contained"
            >
              Buy pack
            </Button>
          </div>
        </div>
        <div className="absolute top-[0px] left-[0px] w-[1440px] h-[80px] overflow-hidden text-left text-sm">
          <div className="absolute top-[17px] left-[1124px] flex flex-row items-center justify-start gap-[24px]">
            <div className="relative [text-decoration:underline] font-medium inline-block">
              Login
            </div>
            <Button
              style={{ borderRadius: "1000px", backgroundColor: "black" }}
              variant="contained"
            >
              Sign up
            </Button>
          </div>
          <div className="absolute top-[20px] left-[123px] text-5xl leading-[39px] font-extrabold font-roboto text-black inline-block">
            EmailPacks
          </div>
        </div>
      </div>
      <b className="absolute top-[952px] left-[221px] text-7xl inline-block w-[998px]">
        <span>{`Email Packs `}</span>
        <span className="[background:linear-gradient(98.41deg,_#4568dc,_#b06ab3)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          Features
        </span>
      </b>
      <div className="absolute top-[1028px] left-[531px] text-3xs text-gray-400 inline-block">
        3 reasons why you should subscribe to emailpacks
      </div>
      <Button
        className="absolute top-[3370px] left-[561px]"
        style={{ borderRadius: "1000px", backgroundColor: "black" }}
        sx={{ width: 319 }}
        variant="contained"
      >
        Buy now
      </Button>
      <div className="absolute top-[1801px] left-[76px] w-[1287px] flex flex-col items-start justify-center gap-[49px] text-left text-6xl">
        <div className="self-stretch flex flex-row items-center justify-center gap-[529px]">
          <div className="flex-1 relative font-semibold inline-block">
            Current templates
          </div>
          <div className="rounded-[50px] [border:1px_solid_#151515] box-border flex flex-row p-[20px_32px] items-start justify-start text-center text-sm">
            <div className="relative font-medium inline-block">Join Now</div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[49px] text-center text-2xl">
          <div className="flex flex-row items-start justify-start gap-[49px]">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-col items-start justify-start gap-[13px]">
                    <div className="relative rounded-[12px] bg-gray-300 w-[285px] h-[601px] shrink-0 overflow-hidden" />
                    <div className="rounded-[12px] flex flex-col items-start justify-start gap-[3px]">
                      <div className="flex flex-row items-start justify-start">
                        <b className="relative inline-block">Template name</b>
                      </div>
                      <div className="relative text-3xs font-medium text-gray-400 inline-block">
                        By John doe
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-col items-start justify-start gap-[13px]">
                    <div className="relative rounded-[12px] bg-gray-300 w-[285px] h-[601px] shrink-0 overflow-hidden" />
                    <div className="rounded-[12px] flex flex-col items-start justify-start gap-[3px]">
                      <div className="flex flex-row items-start justify-start">
                        <b className="relative inline-block">Template name</b>
                      </div>
                      <div className="relative text-3xs font-medium text-gray-400 inline-block">
                        By John doe
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[49px]">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-col items-start justify-start gap-[13px]">
                    <div className="relative rounded-[12px] bg-gray-300 w-[285px] h-[601px] shrink-0 overflow-hidden" />
                    <div className="rounded-[12px] flex flex-col items-start justify-start gap-[3px]">
                      <div className="flex flex-row items-start justify-start">
                        <b className="relative inline-block">Template name</b>
                      </div>
                      <div className="relative text-3xs font-medium text-gray-400 inline-block">
                        By John doe
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-col items-start justify-start gap-[13px]">
                    <div className="relative rounded-[12px] bg-gray-300 w-[285px] h-[601px] shrink-0 overflow-hidden" />
                    <div className="rounded-[12px] flex flex-col items-start justify-start gap-[3px]">
                      <div className="flex flex-row items-start justify-start">
                        <b className="relative inline-block">Template name</b>
                      </div>
                      <div className="relative text-3xs font-medium text-gray-400 inline-block">
                        By John doe
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[2616px] left-[75px] flex flex-row items-start justify-start gap-[49px] text-2xl">
        <div className="flex flex-row items-start justify-start gap-[49px]">
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-row items-start justify-start">
                <div className="flex flex-col items-start justify-start gap-[13px]">
                  <div className="relative rounded-[12px] bg-gray-300 w-[285px] h-[601px] shrink-0 overflow-hidden" />
                  <div className="rounded-[12px] flex flex-col items-start justify-start gap-[3px]">
                    <div className="flex flex-row items-start justify-start">
                      <b className="relative inline-block">Template name</b>
                    </div>
                    <div className="relative text-3xs font-medium text-gray-400 inline-block">
                      By John doe
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-row items-start justify-start">
                <div className="flex flex-col items-start justify-start gap-[13px]">
                  <div className="relative rounded-[12px] bg-gray-300 w-[285px] h-[601px] shrink-0 overflow-hidden" />
                  <div className="rounded-[12px] flex flex-col items-start justify-start gap-[3px]">
                    <div className="flex flex-row items-start justify-start">
                      <b className="relative inline-block">Template name</b>
                    </div>
                    <div className="relative text-3xs font-medium text-gray-400 inline-block">
                      By John doe
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[49px]">
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-row items-start justify-start">
                <div className="flex flex-col items-start justify-start gap-[13px]">
                  <div className="relative rounded-[12px] bg-gray-300 w-[285px] h-[601px] shrink-0 overflow-hidden" />
                  <div className="rounded-[12px] flex flex-col items-start justify-start gap-[3px]">
                    <div className="flex flex-row items-start justify-start">
                      <b className="relative inline-block">Template name</b>
                    </div>
                    <div className="relative text-3xs font-medium text-gray-400 inline-block">
                      By John doe
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-row items-start justify-start">
                <div className="flex flex-col items-start justify-start gap-[13px]">
                  <div className="relative rounded-[12px] bg-gray-300 w-[285px] h-[601px] shrink-0 overflow-hidden" />
                  <div className="rounded-[12px] flex flex-col items-start justify-start gap-[3px]">
                    <div className="flex flex-row items-start justify-start">
                      <b className="relative inline-block">Template name</b>
                    </div>
                    <div className="relative text-3xs font-medium text-gray-400 inline-block">
                      By John doe
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[682px] left-[-15px] w-[1481.29px] h-[159px] text-6xl text-white">
        <div className="absolute top-[19px] left-[12px] [background:linear-gradient(98.41deg,_#4568dc,_#b06ab3)] w-[1469.29px] h-[140px] overflow-hidden" />
        <div className="absolute top-[0px] left-[0px] bg-gray-600 w-[1469.29px] h-[140px] overflow-hidden">
          <div className="absolute top-[43px] left-[-57px] flex flex-row items-start justify-start gap-[40px]">
            <div className="relative font-semibold inline-block">
              $29 / month
            </div>
            <div className="relative font-semibold inline-block">
              5 new templates
            </div>
            <div className="relative font-semibold inline-block">
              $29 / month
            </div>
          </div>
          <div className="absolute top-[43px] left-[958px] flex flex-row items-start justify-start gap-[40px] text-gray-100">
            <div className="relative font-semibold text-white inline-block">
              5 new templates
            </div>
            <div className="relative font-semibold inline-block">
              $ 29 / month
            </div>
            <div className="relative font-medium font-roboto inline-block">
              Buy templates
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[3578px] left-[0px] bg-gray-200 w-[1440px] h-[713px] flex flex-col p-[50px_0px] box-border items-center justify-start gap-[88px] text-gray-400">
        <div className="relative w-[572px] h-[128px] shrink-0">
          <div className="absolute top-[72px] left-[0px] leading-[28px] inline-block w-[570px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </div>
          <div className="absolute top-[0px] left-[17px] text-7xl leading-[52px] text-left inline-block text-gray-500">
            <b>{`People `}</b>
            <span className="font-extrabold">
              <span className="[background:linear-gradient(98.41deg,_#4568dc,_#b06ab3)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                love
              </span>
            </span>
            <span>
              <span className="font-extrabold">{` `}</span>
              <b>Email Packs</b>
            </span>
          </div>
        </div>
        <div className="relative w-[1296px] h-[310px] shrink-0 text-left text-3xs text-gray-700 font-inter">
          <div className="absolute top-[0px] left-[0px] w-[416px] h-[310px]">
            <div className="absolute top-[0px] left-[0px] rounded-[10px] bg-white w-[416px] h-[310px]" />
            <div className="absolute top-[30px] left-[30px] w-[356.06px] h-[249.89px]">
              <div className="absolute top-[60px] left-[0.06px] w-[356px] h-[189.89px]">
                <div className="absolute top-[119.89px] left-[0px] w-[200px] h-[70px]">
                  <div className="absolute top-[12px] left-[94px] w-[106px] h-[50px]">
                    <div className="absolute top-[0px] left-[0px] leading-[24px] font-semibold inline-block">
                      Joew Harbert
                    </div>
                    <div className="absolute top-[26px] left-[0px] text-6xs leading-[24px] inline-block opacity-[0.7]">
                      CEO, NoonBrew
                    </div>
                  </div>
                  <img
                    className="absolute top-[0px] left-[0px] w-[70px] h-[70px] object-cover"
                    alt=""
                    src="../mask-group@2x.png"
                  />
                </div>
                <div className="absolute top-[0px] left-[0px] text-base leading-[30px] font-medium text-gray-500 inline-block w-[356px]">
                  "They are able to help a startup like mine scale and are very
                  responsive to all of our unique needs."
                </div>
              </div>
              <img
                className="absolute top-[0px] left-[0px] w-[40.06px] h-[29.9px]"
                alt=""
                src="../vector.svg"
              />
            </div>
          </div>
          <div className="absolute top-[0px] left-[440px] w-[416px] h-[310px]">
            <div className="absolute top-[0px] left-[0px] rounded-[10px] bg-white w-[416px] h-[310px]" />
            <div className="absolute top-[30px] left-[30px] w-[356.06px] h-[249.89px]">
              <div className="absolute top-[60px] left-[0.06px] w-[356px] h-[189.89px]">
                <div className="absolute top-[119.89px] left-[0px] w-[300px] h-[70px]">
                  <div className="absolute top-[12px] left-[94px] w-[206px] h-[50px]">
                    <div className="absolute top-[0px] left-[0px] leading-[24px] font-semibold inline-block">
                      Mila McSabbu
                    </div>
                    <div className="absolute top-[26px] left-[0px] text-6xs leading-[24px] inline-block opacity-[0.7]">{`Marketing & Office Coordinator`}</div>
                  </div>
                  <img
                    className="absolute top-[0px] left-[0px] w-[70px] h-[70px] object-cover"
                    alt=""
                    src="../mask-group1@2x.png"
                  />
                </div>
                <div className="absolute top-[0px] left-[0px] text-base leading-[30px] font-medium text-gray-500 inline-block w-[356px]">
                  “Division of Labor’s creative ideas were great, and working
                  with their team was truly easy they were very responsive.”
                </div>
              </div>
              <img
                className="absolute top-[0px] left-[0px] w-[40.06px] h-[29.9px]"
                alt=""
                src="../vector1.svg"
              />
            </div>
          </div>
          <div className="absolute top-[0px] left-[880px] w-[416px] h-[310px]">
            <div className="absolute top-[0px] left-[0px] rounded-[10px] bg-white w-[416px] h-[310px]" />
            <div className="absolute top-[30px] left-[30px] w-[356.06px] h-[249.89px]">
              <div className="absolute top-[60px] left-[0.06px] w-[356px] h-[189.89px]">
                <div className="absolute top-[119.89px] left-[0px] w-[269px] h-[70px]">
                  <div className="absolute top-[12px] left-[94px] w-[175px] h-[50px]">
                    <div className="absolute top-[0px] left-[0px] leading-[24px] font-semibold inline-block">
                      Robert Fox
                    </div>
                    <div className="absolute top-[26px] left-[0px] text-6xs leading-[24px] inline-block opacity-[0.7]">
                      Owner, Beards of Brothers
                    </div>
                  </div>
                  <img
                    className="absolute top-[0px] left-[0px] w-[70px] h-[70px] object-cover"
                    alt=""
                    src="../mask-group2@2x.png"
                  />
                </div>
                <div className="absolute top-[0px] left-[0px] text-base leading-[30px] font-medium text-gray-500 inline-block w-[356px]">
                  “We were blown away when we saw Mixland. The combination of
                  social, email, knowledge base, mobile, ets.”
                </div>
              </div>
              <img
                className="absolute top-[0px] left-[0px] w-[40.06px] h-[29.9px]"
                alt=""
                src="../vector2.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[1145px] left-[78px] flex flex-row items-start justify-start gap-[18px] text-left text-gray-700">
        <div className="relative w-[416px] h-[270px] shrink-0">
          <div className="absolute top-[0px] left-[0px] rounded-[12px] bg-white w-[416px] h-[270px]" />
          <div className="absolute top-[141px] left-[30px] leading-[28px] inline-block w-[356px] opacity-[0.7]">
            Every month we’ll provide you with holiday-specific,
            season-specific, and relevant evergreen campaign templates.
          </div>
          <b className="absolute top-[103px] left-[30px] text-xl leading-[26px] inline-block text-gray-500">
            Timely and actionable templates
          </b>
          <img
            className="absolute top-[23px] left-[30px] w-[63px] h-[63px] overflow-hidden"
            alt=""
            src="../frame.svg"
          />
        </div>
        <div className="relative w-[416px] h-[270px] shrink-0">
          <div className="absolute top-[0px] left-[0px] rounded-[12px] bg-white w-[416px] h-[270px]" />
          <div className="absolute top-[141px] left-[30px] leading-[28px] inline-block w-[356px] opacity-[0.7]">
            All of the templates are built, tested, and optimized for mobile,
            desktop, and dark mode.
          </div>
          <b className="absolute top-[103px] left-[30px] text-xl leading-[26px] inline-block text-gray-500">
            Mobile/Desktop optimized
          </b>
        </div>
        <div className="relative w-[416px] h-[270px] shrink-0">
          <div className="absolute top-[0px] left-[0px] rounded-[12px] bg-white w-[416px] h-[270px]" />
          <div className="absolute top-[141px] left-[30px] leading-[28px] inline-block w-[356px] opacity-[0.7]">
            We’ve built all the templates to be easily editable directly within
            your Klaviyo account. No third-party tools are required.
          </div>
          <b className="absolute top-[103px] left-[30px] text-xl leading-[26px] inline-block text-gray-500">
            Beautiful and ready to use
          </b>
        </div>
      </div>
      <div className="absolute top-[1433px] left-[78px] flex flex-row items-start justify-start gap-[18px] text-left text-gray-700">
        <div className="relative w-[416px] h-[270px] shrink-0">
          <div className="absolute top-[0px] left-[0px] rounded-[12px] bg-white w-[416px] h-[270px]" />
          <div className="absolute top-[141px] left-[30px] leading-[28px] inline-block opacity-[0.7]">
            Our templates are built to be customized to any brand assets. Within
            emailpacks you are able to input your brand colors, and plug in
            images that perfectly cropped to the original template. No more ugly
            templates, once you import your data.
          </div>
          <b className="absolute top-[107px] left-[30px] text-xl leading-[26px] flex text-gray-500 items-center w-[316px]">{`Easily edit colors & images`}</b>
          <img
            className="absolute top-[38px] left-[30px] w-[54px] h-[54px] overflow-hidden"
            alt=""
            src="../frame1.svg"
          />
        </div>
        <div className="relative w-[416px] h-[270px] shrink-0">
          <div className="absolute top-[0px] left-[0px] rounded-[12px] bg-white w-[416px] h-[270px]" />
          <div className="absolute top-[141px] left-[30px] leading-[28px] inline-block opacity-[0.7]">
            Every month you will be able to choose from 100+ templates and
            counting. We are continuously adding more and more templates. You
            can choose and unlock the 5 what works for you.
          </div>
          <b className="absolute top-[103px] left-[30px] text-xl leading-[26px] inline-block text-gray-500">
            New templates added weekly
          </b>
        </div>
        <div className="relative w-[416px] h-[270px] shrink-0">
          <div className="absolute top-[0px] left-[0px] rounded-[12px] bg-white w-[416px] h-[270px]" />
          <div className="absolute top-[141px] left-[30px] leading-[28px] inline-block opacity-[0.7]">
            Our templates will allow you to do more with less. With our
            pre-built email templates, you’ll save both time and money.
          </div>
          <b className="absolute top-[103px] left-[30px] text-xl leading-[26px] inline-block text-gray-500">
            Streamlined and Cost Effective
          </b>
        </div>
      </div>
      <div className="absolute top-[1167px] left-[972px] flex flex-row items-start justify-start">
        <img
          className="relative w-[63px] h-[63px] shrink-0 overflow-hidden"
          alt=""
          src="../frame2.svg"
        />
      </div>
      <img
        className="absolute top-[1168px] left-[542px] w-[68.5px] h-[63px]"
        alt=""
        src="../group-17865.svg"
      />
      <div className="absolute top-[4291px] left-[-2px] w-[1440px] h-[568px] overflow-hidden text-left text-3xs text-white">
        <div className="absolute top-[0px] left-[0px] w-[1440px] h-[568px]">
          <div className="absolute top-[0px] left-[0px] bg-gray-500 w-[1440px] h-[568px]" />
          <div className="absolute top-[118px] left-[72px] text-5xl font-extrabold font-roboto text-white text-center inline-block">
            EmailPacks
          </div>
          <div className="absolute top-[124px] left-[567px] w-[146px] h-[269px]">
            <div className="absolute top-[49px] left-[0px] leading-[44px] whitespace-pre-wrap inline-block">
              <p className="[margin-block-start:0] [margin-block-end:0px]">{`Pricing          `}</p>
              <p className="[margin-block-start:0] [margin-block-end:0px]">{`Features          `}</p>
              <p className="[margin-block-start:0] [margin-block-end:0px]">
                Example templates
              </p>
              <p className="[margin-block-start:0] [margin-block-end:0px]">
                Download
              </p>
            </div>
            <div className="absolute top-[0px] left-[0px] text-8xs tracking-[3px] leading-[22px] font-semibold text-gray-100 inline-block">
              COMPANY
            </div>
          </div>
          <div className="absolute top-[124px] left-[781px] w-[147px] h-[181px]">
            <div className="absolute top-[49px] left-[0px] leading-[44px] inline-block">
              <p className="[margin-block-start:0] [margin-block-end:0px]">
                Customer Support
              </p>
              <p className="[margin-block-start:0] [margin-block-end:0px]">{`Terms & Conditions`}</p>
              <p className="m-[0]">Privacy Policy</p>
            </div>
            <div className="absolute top-[0px] left-[0px] text-8xs tracking-[3px] leading-[22px] font-semibold text-gray-100 inline-block">
              HELP
            </div>
          </div>
          <div className="absolute top-[124px] left-[1038px] w-[306px] h-[111px] text-8xs text-gray-100">
            <TextField
              className="[border:none] bg-[transparent] absolute top-[56px] left-[0px]"
              style={{ backgroundColor: "white", borderRadius: "1000px" }}
              sx={{ width: 306 }}
              variant="outlined"
              type="text"
              label="Enter your email"
              placeholder="Placeholder"
              size="medium"
              margin="none"
            />
            <div className="absolute top-[0px] left-[0px] tracking-[3px] leading-[22px] font-semibold inline-block">
              SUBSCRIBE TO NEWSLETTER
            </div>
          </div>
          <div className="absolute top-[187px] left-[72px] w-[341px] h-[142px] text-gray-100">
            <div className="absolute top-[0px] left-[0px] leading-[26px] inline-block w-[341px]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </div>
            <img
              className="absolute top-[114px] left-[0px] w-[148px] h-[28px]"
              alt=""
              src="../social.svg"
            />
          </div>
          <div className="absolute top-[470px] left-[72px] w-[1296px] h-[56px] text-center text-6xs">
            <div className="absolute top-[-0.5px] left-[-0.5px] border-t-[1px_solid_#3f3f46] box-border w-[1297px] h-[1px]" />
            <div className="absolute top-[36px] left-[475px] leading-[20px] inline-block">
              © Copyright 2021, All Rights Reserved by Emailpacks
            </div>
          </div>
        </div>
        <Button
          className="absolute top-[calc(50%_-_33px)] left-[1038px]"
          style={{
            borderRadius: "1000px",
            borderColor: "white",
            color: "white",
          }}
          sx={{ width: 136 }}
          variant="outlined"
        >
          Subscribe
        </Button>
      </div>
      <img
        className="absolute top-[1478px] left-[534px] w-[52px] h-[52px] overflow-hidden"
        alt=""
        src="../frame3.svg"
      />
      <img
        className="absolute top-[1470px] left-[976px] w-[70px] h-[59px] overflow-hidden"
        alt=""
        src="../frame4.svg"
      />
    </div>
  );
};

export default LandingPage;
