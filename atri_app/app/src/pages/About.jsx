import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Carousel as Carousel1 } from "@atrilabs/react-component-manifests/src/manifests/Carousel/Carousel.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image1 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Button as Button1 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { useFlex247Cb, useFlex248Cb, useFlex249Cb, useFlex250Cb, useFlex251Cb, useFlex253Cb, useFlex255Cb, useFlex254Cb, useFlex257Cb, useFlex256Cb, useFlex262Cb, useFlex311Cb, useFlex313Cb, useFlex314Cb, useFlex317Cb, useFlex315Cb, useFlex316Cb, useFlex328Cb, useFlex329Cb, useFlex330Cb, useFlex264Cb, useFlex263Cb, useFlex270Cb, useFlex271Cb, useFlex272Cb, useFlex275Cb, useFlex276Cb, useFlex280Cb, useFlex286Cb, useFlex285Cb, useFlex288Cb, useFlex287Cb, useFlex302Cb, useFlex301Cb, useFlex277Cb, useFlex309Cb, useFlex306Cb, useFlex303Cb, useFlex307Cb, useFlex304Cb, useFlex308Cb, useFlex305Cb, useFlex310Cb, useFlex318Cb, useFlex323Cb, useFlex319Cb, useFlex320Cb, useFlex322Cb, useFlex321Cb, useFlex266Cb, useCarousel3Cb, useFlex267Cb, useFlex325Cb, useTextBox182Cb, useTextBox183Cb, useImage85Cb, useTextBox184Cb, useTextBox185Cb, useTextBox186Cb, useImage86Cb, useTextBox187Cb, useTextBox188Cb, useTextBox189Cb, useImage87Cb, useTextBox190Cb, useTextBox191Cb, useTextBox192Cb, useImage104Cb, useTextBox225Cb, useTextBox226Cb, useButton31Cb, useTextBox227Cb, useTextBox228Cb, useButton32Cb, useTextBox229Cb, useTextBox230Cb, useImage106Cb, useImage110Cb, useImage112Cb, useImage113Cb, useImage114Cb, useTextBox233Cb, useTextBox193Cb, useFlex268Cb, useTextBox202Cb, useImage92Cb, useTextBox201Cb, useTextBox204Cb, useImage93Cb, useTextBox203Cb, useTextBox218Cb, useImage100Cb, useTextBox217Cb, useImage101Cb, useTextBox222Cb, useTextBox219Cb, useImage102Cb, useTextBox223Cb, useTextBox220Cb, useImage103Cb, useTextBox224Cb, useTextBox221Cb, useFlex324Cb, useImage108Cb, useTextBox231Cb, useTextBox232Cb, useImage107Cb } from "../page-cbs/About";
import "../page-css/About.css";
import "../custom/About";

export default function About() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex247Props = useStore((state)=>state["About"]["Flex247"]);
const Flex247IoProps = useIoStore((state)=>state["About"]["Flex247"]);
const Flex247Cb = useFlex247Cb()
const Flex248Props = useStore((state)=>state["About"]["Flex248"]);
const Flex248IoProps = useIoStore((state)=>state["About"]["Flex248"]);
const Flex248Cb = useFlex248Cb()
const Flex249Props = useStore((state)=>state["About"]["Flex249"]);
const Flex249IoProps = useIoStore((state)=>state["About"]["Flex249"]);
const Flex249Cb = useFlex249Cb()
const Flex250Props = useStore((state)=>state["About"]["Flex250"]);
const Flex250IoProps = useIoStore((state)=>state["About"]["Flex250"]);
const Flex250Cb = useFlex250Cb()
const Flex251Props = useStore((state)=>state["About"]["Flex251"]);
const Flex251IoProps = useIoStore((state)=>state["About"]["Flex251"]);
const Flex251Cb = useFlex251Cb()
const Flex253Props = useStore((state)=>state["About"]["Flex253"]);
const Flex253IoProps = useIoStore((state)=>state["About"]["Flex253"]);
const Flex253Cb = useFlex253Cb()
const Flex255Props = useStore((state)=>state["About"]["Flex255"]);
const Flex255IoProps = useIoStore((state)=>state["About"]["Flex255"]);
const Flex255Cb = useFlex255Cb()
const Flex254Props = useStore((state)=>state["About"]["Flex254"]);
const Flex254IoProps = useIoStore((state)=>state["About"]["Flex254"]);
const Flex254Cb = useFlex254Cb()
const Flex257Props = useStore((state)=>state["About"]["Flex257"]);
const Flex257IoProps = useIoStore((state)=>state["About"]["Flex257"]);
const Flex257Cb = useFlex257Cb()
const Flex256Props = useStore((state)=>state["About"]["Flex256"]);
const Flex256IoProps = useIoStore((state)=>state["About"]["Flex256"]);
const Flex256Cb = useFlex256Cb()
const Flex262Props = useStore((state)=>state["About"]["Flex262"]);
const Flex262IoProps = useIoStore((state)=>state["About"]["Flex262"]);
const Flex262Cb = useFlex262Cb()
const Flex311Props = useStore((state)=>state["About"]["Flex311"]);
const Flex311IoProps = useIoStore((state)=>state["About"]["Flex311"]);
const Flex311Cb = useFlex311Cb()
const Flex313Props = useStore((state)=>state["About"]["Flex313"]);
const Flex313IoProps = useIoStore((state)=>state["About"]["Flex313"]);
const Flex313Cb = useFlex313Cb()
const Flex314Props = useStore((state)=>state["About"]["Flex314"]);
const Flex314IoProps = useIoStore((state)=>state["About"]["Flex314"]);
const Flex314Cb = useFlex314Cb()
const Flex317Props = useStore((state)=>state["About"]["Flex317"]);
const Flex317IoProps = useIoStore((state)=>state["About"]["Flex317"]);
const Flex317Cb = useFlex317Cb()
const Flex315Props = useStore((state)=>state["About"]["Flex315"]);
const Flex315IoProps = useIoStore((state)=>state["About"]["Flex315"]);
const Flex315Cb = useFlex315Cb()
const Flex316Props = useStore((state)=>state["About"]["Flex316"]);
const Flex316IoProps = useIoStore((state)=>state["About"]["Flex316"]);
const Flex316Cb = useFlex316Cb()
const Flex328Props = useStore((state)=>state["About"]["Flex328"]);
const Flex328IoProps = useIoStore((state)=>state["About"]["Flex328"]);
const Flex328Cb = useFlex328Cb()
const Flex329Props = useStore((state)=>state["About"]["Flex329"]);
const Flex329IoProps = useIoStore((state)=>state["About"]["Flex329"]);
const Flex329Cb = useFlex329Cb()
const Flex330Props = useStore((state)=>state["About"]["Flex330"]);
const Flex330IoProps = useIoStore((state)=>state["About"]["Flex330"]);
const Flex330Cb = useFlex330Cb()
const Flex264Props = useStore((state)=>state["About"]["Flex264"]);
const Flex264IoProps = useIoStore((state)=>state["About"]["Flex264"]);
const Flex264Cb = useFlex264Cb()
const Flex263Props = useStore((state)=>state["About"]["Flex263"]);
const Flex263IoProps = useIoStore((state)=>state["About"]["Flex263"]);
const Flex263Cb = useFlex263Cb()
const Flex270Props = useStore((state)=>state["About"]["Flex270"]);
const Flex270IoProps = useIoStore((state)=>state["About"]["Flex270"]);
const Flex270Cb = useFlex270Cb()
const Flex271Props = useStore((state)=>state["About"]["Flex271"]);
const Flex271IoProps = useIoStore((state)=>state["About"]["Flex271"]);
const Flex271Cb = useFlex271Cb()
const Flex272Props = useStore((state)=>state["About"]["Flex272"]);
const Flex272IoProps = useIoStore((state)=>state["About"]["Flex272"]);
const Flex272Cb = useFlex272Cb()
const Flex275Props = useStore((state)=>state["About"]["Flex275"]);
const Flex275IoProps = useIoStore((state)=>state["About"]["Flex275"]);
const Flex275Cb = useFlex275Cb()
const Flex276Props = useStore((state)=>state["About"]["Flex276"]);
const Flex276IoProps = useIoStore((state)=>state["About"]["Flex276"]);
const Flex276Cb = useFlex276Cb()
const Flex280Props = useStore((state)=>state["About"]["Flex280"]);
const Flex280IoProps = useIoStore((state)=>state["About"]["Flex280"]);
const Flex280Cb = useFlex280Cb()
const Flex286Props = useStore((state)=>state["About"]["Flex286"]);
const Flex286IoProps = useIoStore((state)=>state["About"]["Flex286"]);
const Flex286Cb = useFlex286Cb()
const Flex285Props = useStore((state)=>state["About"]["Flex285"]);
const Flex285IoProps = useIoStore((state)=>state["About"]["Flex285"]);
const Flex285Cb = useFlex285Cb()
const Flex288Props = useStore((state)=>state["About"]["Flex288"]);
const Flex288IoProps = useIoStore((state)=>state["About"]["Flex288"]);
const Flex288Cb = useFlex288Cb()
const Flex287Props = useStore((state)=>state["About"]["Flex287"]);
const Flex287IoProps = useIoStore((state)=>state["About"]["Flex287"]);
const Flex287Cb = useFlex287Cb()
const Flex302Props = useStore((state)=>state["About"]["Flex302"]);
const Flex302IoProps = useIoStore((state)=>state["About"]["Flex302"]);
const Flex302Cb = useFlex302Cb()
const Flex301Props = useStore((state)=>state["About"]["Flex301"]);
const Flex301IoProps = useIoStore((state)=>state["About"]["Flex301"]);
const Flex301Cb = useFlex301Cb()
const Flex277Props = useStore((state)=>state["About"]["Flex277"]);
const Flex277IoProps = useIoStore((state)=>state["About"]["Flex277"]);
const Flex277Cb = useFlex277Cb()
const Flex309Props = useStore((state)=>state["About"]["Flex309"]);
const Flex309IoProps = useIoStore((state)=>state["About"]["Flex309"]);
const Flex309Cb = useFlex309Cb()
const Flex306Props = useStore((state)=>state["About"]["Flex306"]);
const Flex306IoProps = useIoStore((state)=>state["About"]["Flex306"]);
const Flex306Cb = useFlex306Cb()
const Flex303Props = useStore((state)=>state["About"]["Flex303"]);
const Flex303IoProps = useIoStore((state)=>state["About"]["Flex303"]);
const Flex303Cb = useFlex303Cb()
const Flex307Props = useStore((state)=>state["About"]["Flex307"]);
const Flex307IoProps = useIoStore((state)=>state["About"]["Flex307"]);
const Flex307Cb = useFlex307Cb()
const Flex304Props = useStore((state)=>state["About"]["Flex304"]);
const Flex304IoProps = useIoStore((state)=>state["About"]["Flex304"]);
const Flex304Cb = useFlex304Cb()
const Flex308Props = useStore((state)=>state["About"]["Flex308"]);
const Flex308IoProps = useIoStore((state)=>state["About"]["Flex308"]);
const Flex308Cb = useFlex308Cb()
const Flex305Props = useStore((state)=>state["About"]["Flex305"]);
const Flex305IoProps = useIoStore((state)=>state["About"]["Flex305"]);
const Flex305Cb = useFlex305Cb()
const Flex310Props = useStore((state)=>state["About"]["Flex310"]);
const Flex310IoProps = useIoStore((state)=>state["About"]["Flex310"]);
const Flex310Cb = useFlex310Cb()
const Flex318Props = useStore((state)=>state["About"]["Flex318"]);
const Flex318IoProps = useIoStore((state)=>state["About"]["Flex318"]);
const Flex318Cb = useFlex318Cb()
const Flex323Props = useStore((state)=>state["About"]["Flex323"]);
const Flex323IoProps = useIoStore((state)=>state["About"]["Flex323"]);
const Flex323Cb = useFlex323Cb()
const Flex319Props = useStore((state)=>state["About"]["Flex319"]);
const Flex319IoProps = useIoStore((state)=>state["About"]["Flex319"]);
const Flex319Cb = useFlex319Cb()
const Flex320Props = useStore((state)=>state["About"]["Flex320"]);
const Flex320IoProps = useIoStore((state)=>state["About"]["Flex320"]);
const Flex320Cb = useFlex320Cb()
const Flex322Props = useStore((state)=>state["About"]["Flex322"]);
const Flex322IoProps = useIoStore((state)=>state["About"]["Flex322"]);
const Flex322Cb = useFlex322Cb()
const Flex321Props = useStore((state)=>state["About"]["Flex321"]);
const Flex321IoProps = useIoStore((state)=>state["About"]["Flex321"]);
const Flex321Cb = useFlex321Cb()
const Flex266Props = useStore((state)=>state["About"]["Flex266"]);
const Flex266IoProps = useIoStore((state)=>state["About"]["Flex266"]);
const Flex266Cb = useFlex266Cb()
const Carousel3Props = useStore((state)=>state["About"]["Carousel3"]);
const Carousel3IoProps = useIoStore((state)=>state["About"]["Carousel3"]);
const Carousel3Cb = useCarousel3Cb()
const Flex267Props = useStore((state)=>state["About"]["Flex267"]);
const Flex267IoProps = useIoStore((state)=>state["About"]["Flex267"]);
const Flex267Cb = useFlex267Cb()
const Flex325Props = useStore((state)=>state["About"]["Flex325"]);
const Flex325IoProps = useIoStore((state)=>state["About"]["Flex325"]);
const Flex325Cb = useFlex325Cb()
const TextBox182Props = useStore((state)=>state["About"]["TextBox182"]);
const TextBox182IoProps = useIoStore((state)=>state["About"]["TextBox182"]);
const TextBox182Cb = useTextBox182Cb()
const TextBox183Props = useStore((state)=>state["About"]["TextBox183"]);
const TextBox183IoProps = useIoStore((state)=>state["About"]["TextBox183"]);
const TextBox183Cb = useTextBox183Cb()
const Image85Props = useStore((state)=>state["About"]["Image85"]);
const Image85IoProps = useIoStore((state)=>state["About"]["Image85"]);
const Image85Cb = useImage85Cb()
const TextBox184Props = useStore((state)=>state["About"]["TextBox184"]);
const TextBox184IoProps = useIoStore((state)=>state["About"]["TextBox184"]);
const TextBox184Cb = useTextBox184Cb()
const TextBox185Props = useStore((state)=>state["About"]["TextBox185"]);
const TextBox185IoProps = useIoStore((state)=>state["About"]["TextBox185"]);
const TextBox185Cb = useTextBox185Cb()
const TextBox186Props = useStore((state)=>state["About"]["TextBox186"]);
const TextBox186IoProps = useIoStore((state)=>state["About"]["TextBox186"]);
const TextBox186Cb = useTextBox186Cb()
const Image86Props = useStore((state)=>state["About"]["Image86"]);
const Image86IoProps = useIoStore((state)=>state["About"]["Image86"]);
const Image86Cb = useImage86Cb()
const TextBox187Props = useStore((state)=>state["About"]["TextBox187"]);
const TextBox187IoProps = useIoStore((state)=>state["About"]["TextBox187"]);
const TextBox187Cb = useTextBox187Cb()
const TextBox188Props = useStore((state)=>state["About"]["TextBox188"]);
const TextBox188IoProps = useIoStore((state)=>state["About"]["TextBox188"]);
const TextBox188Cb = useTextBox188Cb()
const TextBox189Props = useStore((state)=>state["About"]["TextBox189"]);
const TextBox189IoProps = useIoStore((state)=>state["About"]["TextBox189"]);
const TextBox189Cb = useTextBox189Cb()
const Image87Props = useStore((state)=>state["About"]["Image87"]);
const Image87IoProps = useIoStore((state)=>state["About"]["Image87"]);
const Image87Cb = useImage87Cb()
const TextBox190Props = useStore((state)=>state["About"]["TextBox190"]);
const TextBox190IoProps = useIoStore((state)=>state["About"]["TextBox190"]);
const TextBox190Cb = useTextBox190Cb()
const TextBox191Props = useStore((state)=>state["About"]["TextBox191"]);
const TextBox191IoProps = useIoStore((state)=>state["About"]["TextBox191"]);
const TextBox191Cb = useTextBox191Cb()
const TextBox192Props = useStore((state)=>state["About"]["TextBox192"]);
const TextBox192IoProps = useIoStore((state)=>state["About"]["TextBox192"]);
const TextBox192Cb = useTextBox192Cb()
const Image104Props = useStore((state)=>state["About"]["Image104"]);
const Image104IoProps = useIoStore((state)=>state["About"]["Image104"]);
const Image104Cb = useImage104Cb()
const TextBox225Props = useStore((state)=>state["About"]["TextBox225"]);
const TextBox225IoProps = useIoStore((state)=>state["About"]["TextBox225"]);
const TextBox225Cb = useTextBox225Cb()
const TextBox226Props = useStore((state)=>state["About"]["TextBox226"]);
const TextBox226IoProps = useIoStore((state)=>state["About"]["TextBox226"]);
const TextBox226Cb = useTextBox226Cb()
const Button31Props = useStore((state)=>state["About"]["Button31"]);
const Button31IoProps = useIoStore((state)=>state["About"]["Button31"]);
const Button31Cb = useButton31Cb()
const TextBox227Props = useStore((state)=>state["About"]["TextBox227"]);
const TextBox227IoProps = useIoStore((state)=>state["About"]["TextBox227"]);
const TextBox227Cb = useTextBox227Cb()
const TextBox228Props = useStore((state)=>state["About"]["TextBox228"]);
const TextBox228IoProps = useIoStore((state)=>state["About"]["TextBox228"]);
const TextBox228Cb = useTextBox228Cb()
const Button32Props = useStore((state)=>state["About"]["Button32"]);
const Button32IoProps = useIoStore((state)=>state["About"]["Button32"]);
const Button32Cb = useButton32Cb()
const TextBox229Props = useStore((state)=>state["About"]["TextBox229"]);
const TextBox229IoProps = useIoStore((state)=>state["About"]["TextBox229"]);
const TextBox229Cb = useTextBox229Cb()
const TextBox230Props = useStore((state)=>state["About"]["TextBox230"]);
const TextBox230IoProps = useIoStore((state)=>state["About"]["TextBox230"]);
const TextBox230Cb = useTextBox230Cb()
const Image106Props = useStore((state)=>state["About"]["Image106"]);
const Image106IoProps = useIoStore((state)=>state["About"]["Image106"]);
const Image106Cb = useImage106Cb()
const Image110Props = useStore((state)=>state["About"]["Image110"]);
const Image110IoProps = useIoStore((state)=>state["About"]["Image110"]);
const Image110Cb = useImage110Cb()
const Image112Props = useStore((state)=>state["About"]["Image112"]);
const Image112IoProps = useIoStore((state)=>state["About"]["Image112"]);
const Image112Cb = useImage112Cb()
const Image113Props = useStore((state)=>state["About"]["Image113"]);
const Image113IoProps = useIoStore((state)=>state["About"]["Image113"]);
const Image113Cb = useImage113Cb()
const Image114Props = useStore((state)=>state["About"]["Image114"]);
const Image114IoProps = useIoStore((state)=>state["About"]["Image114"]);
const Image114Cb = useImage114Cb()
const TextBox233Props = useStore((state)=>state["About"]["TextBox233"]);
const TextBox233IoProps = useIoStore((state)=>state["About"]["TextBox233"]);
const TextBox233Cb = useTextBox233Cb()
const TextBox193Props = useStore((state)=>state["About"]["TextBox193"]);
const TextBox193IoProps = useIoStore((state)=>state["About"]["TextBox193"]);
const TextBox193Cb = useTextBox193Cb()
const Flex268Props = useStore((state)=>state["About"]["Flex268"]);
const Flex268IoProps = useIoStore((state)=>state["About"]["Flex268"]);
const Flex268Cb = useFlex268Cb()
const TextBox202Props = useStore((state)=>state["About"]["TextBox202"]);
const TextBox202IoProps = useIoStore((state)=>state["About"]["TextBox202"]);
const TextBox202Cb = useTextBox202Cb()
const Image92Props = useStore((state)=>state["About"]["Image92"]);
const Image92IoProps = useIoStore((state)=>state["About"]["Image92"]);
const Image92Cb = useImage92Cb()
const TextBox201Props = useStore((state)=>state["About"]["TextBox201"]);
const TextBox201IoProps = useIoStore((state)=>state["About"]["TextBox201"]);
const TextBox201Cb = useTextBox201Cb()
const TextBox204Props = useStore((state)=>state["About"]["TextBox204"]);
const TextBox204IoProps = useIoStore((state)=>state["About"]["TextBox204"]);
const TextBox204Cb = useTextBox204Cb()
const Image93Props = useStore((state)=>state["About"]["Image93"]);
const Image93IoProps = useIoStore((state)=>state["About"]["Image93"]);
const Image93Cb = useImage93Cb()
const TextBox203Props = useStore((state)=>state["About"]["TextBox203"]);
const TextBox203IoProps = useIoStore((state)=>state["About"]["TextBox203"]);
const TextBox203Cb = useTextBox203Cb()
const TextBox218Props = useStore((state)=>state["About"]["TextBox218"]);
const TextBox218IoProps = useIoStore((state)=>state["About"]["TextBox218"]);
const TextBox218Cb = useTextBox218Cb()
const Image100Props = useStore((state)=>state["About"]["Image100"]);
const Image100IoProps = useIoStore((state)=>state["About"]["Image100"]);
const Image100Cb = useImage100Cb()
const TextBox217Props = useStore((state)=>state["About"]["TextBox217"]);
const TextBox217IoProps = useIoStore((state)=>state["About"]["TextBox217"]);
const TextBox217Cb = useTextBox217Cb()
const Image101Props = useStore((state)=>state["About"]["Image101"]);
const Image101IoProps = useIoStore((state)=>state["About"]["Image101"]);
const Image101Cb = useImage101Cb()
const TextBox222Props = useStore((state)=>state["About"]["TextBox222"]);
const TextBox222IoProps = useIoStore((state)=>state["About"]["TextBox222"]);
const TextBox222Cb = useTextBox222Cb()
const TextBox219Props = useStore((state)=>state["About"]["TextBox219"]);
const TextBox219IoProps = useIoStore((state)=>state["About"]["TextBox219"]);
const TextBox219Cb = useTextBox219Cb()
const Image102Props = useStore((state)=>state["About"]["Image102"]);
const Image102IoProps = useIoStore((state)=>state["About"]["Image102"]);
const Image102Cb = useImage102Cb()
const TextBox223Props = useStore((state)=>state["About"]["TextBox223"]);
const TextBox223IoProps = useIoStore((state)=>state["About"]["TextBox223"]);
const TextBox223Cb = useTextBox223Cb()
const TextBox220Props = useStore((state)=>state["About"]["TextBox220"]);
const TextBox220IoProps = useIoStore((state)=>state["About"]["TextBox220"]);
const TextBox220Cb = useTextBox220Cb()
const Image103Props = useStore((state)=>state["About"]["Image103"]);
const Image103IoProps = useIoStore((state)=>state["About"]["Image103"]);
const Image103Cb = useImage103Cb()
const TextBox224Props = useStore((state)=>state["About"]["TextBox224"]);
const TextBox224IoProps = useIoStore((state)=>state["About"]["TextBox224"]);
const TextBox224Cb = useTextBox224Cb()
const TextBox221Props = useStore((state)=>state["About"]["TextBox221"]);
const TextBox221IoProps = useIoStore((state)=>state["About"]["TextBox221"]);
const TextBox221Cb = useTextBox221Cb()
const Flex324Props = useStore((state)=>state["About"]["Flex324"]);
const Flex324IoProps = useIoStore((state)=>state["About"]["Flex324"]);
const Flex324Cb = useFlex324Cb()
const Image108Props = useStore((state)=>state["About"]["Image108"]);
const Image108IoProps = useIoStore((state)=>state["About"]["Image108"]);
const Image108Cb = useImage108Cb()
const TextBox231Props = useStore((state)=>state["About"]["TextBox231"]);
const TextBox231IoProps = useIoStore((state)=>state["About"]["TextBox231"]);
const TextBox231Cb = useTextBox231Cb()
const TextBox232Props = useStore((state)=>state["About"]["TextBox232"]);
const TextBox232IoProps = useIoStore((state)=>state["About"]["TextBox232"]);
const TextBox232Cb = useTextBox232Cb()
const Image107Props = useStore((state)=>state["About"]["Image107"]);
const Image107IoProps = useIoStore((state)=>state["About"]["Image107"]);
const Image107Cb = useImage107Cb()

  return (<>
  <Flex1 className="p-About Flex325 bpt" {...Flex325Props} {...Flex325Cb} {...Flex325IoProps}/>
<Flex1 className="p-About Flex310 bpt" {...Flex310Props} {...Flex310Cb} {...Flex310IoProps}>
<Flex1 className="p-About Flex319 bpt" {...Flex319Props} {...Flex319Cb} {...Flex319IoProps}>
<Flex1 className="p-About Flex320 bpt" {...Flex320Props} {...Flex320Cb} {...Flex320IoProps}>
<Flex1 className="p-About Flex322 bpt" {...Flex322Props} {...Flex322Cb} {...Flex322IoProps}>
<TextBox1 className="p-About TextBox232 bpt" {...TextBox232Props} {...TextBox232Cb} {...TextBox232IoProps}/>
<TextBox1 className="p-About TextBox231 bpt" {...TextBox231Props} {...TextBox231Cb} {...TextBox231IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-About Flex321 bpt" {...Flex321Props} {...Flex321Cb} {...Flex321IoProps}>
<Image1 className="p-About Image107 bpt" {...Image107Props} {...Image107Cb} {...Image107IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-About Flex318 bpt" {...Flex318Props} {...Flex318Cb} {...Flex318IoProps}>
<Flex1 className="p-About Flex323 bpt" {...Flex323Props} {...Flex323Cb} {...Flex323IoProps}>
<Image1 className="p-About Image108 bpt" {...Image108Props} {...Image108Cb} {...Image108IoProps}/>
</Flex1>
<Flex1 className="p-About Flex324 bpt" {...Flex324Props} {...Flex324Cb} {...Flex324IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-About Flex262 bpt" {...Flex262Props} {...Flex262Cb} {...Flex262IoProps}>
<Flex1 className="p-About Flex328 bpt" {...Flex328Props} {...Flex328Cb} {...Flex328IoProps}>
<Flex1 className="p-About Flex329 bpt" {...Flex329Props} {...Flex329Cb} {...Flex329IoProps}>
<Flex1 className="p-About Flex330 bpt" {...Flex330Props} {...Flex330Cb} {...Flex330IoProps}>
<TextBox1 className="p-About TextBox233 bpt" {...TextBox233Props} {...TextBox233Cb} {...TextBox233IoProps}/>
<Image1 className="p-About Image110 bpt" {...Image110Props} {...Image110Cb} {...Image110IoProps}/>
<Image1 className="p-About Image113 bpt" {...Image113Props} {...Image113Cb} {...Image113IoProps}/>
<Image1 className="p-About Image112 bpt" {...Image112Props} {...Image112Cb} {...Image112IoProps}/>
<Image1 className="p-About Image114 bpt" {...Image114Props} {...Image114Cb} {...Image114IoProps}/>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-About Flex311 bpt" {...Flex311Props} {...Flex311Cb} {...Flex311IoProps}>
<Flex1 className="p-About Flex313 bpt" {...Flex313Props} {...Flex313Cb} {...Flex313IoProps}>
<Image1 className="p-About Image104 bpt" {...Image104Props} {...Image104Cb} {...Image104IoProps}/>
</Flex1>
<Flex1 className="p-About Flex314 bpt" {...Flex314Props} {...Flex314Cb} {...Flex314IoProps}>
<TextBox1 className="p-About TextBox225 bpt" {...TextBox225Props} {...TextBox225Cb} {...TextBox225IoProps}/>
<TextBox1 className="p-About TextBox226 bpt" {...TextBox226Props} {...TextBox226Cb} {...TextBox226IoProps}/>
<TextBox1 className="p-About TextBox227 bpt" {...TextBox227Props} {...TextBox227Cb} {...TextBox227IoProps}/>
<Button1 className="p-About Button31 bpt" {...Button31Props} {...Button31Cb} {...Button31IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-About Flex317 bpt" {...Flex317Props} {...Flex317Cb} {...Flex317IoProps}>
<Flex1 className="p-About Flex315 bpt" {...Flex315Props} {...Flex315Cb} {...Flex315IoProps}>
<TextBox1 className="p-About TextBox230 bpt" {...TextBox230Props} {...TextBox230Cb} {...TextBox230IoProps}/>
<TextBox1 className="p-About TextBox229 bpt" {...TextBox229Props} {...TextBox229Cb} {...TextBox229IoProps}/>
<TextBox1 className="p-About TextBox228 bpt" {...TextBox228Props} {...TextBox228Cb} {...TextBox228IoProps}/>
<Button1 className="p-About Button32 bpt" {...Button32Props} {...Button32Cb} {...Button32IoProps}/>
</Flex1>
<Flex1 className="p-About Flex316 bpt" {...Flex316Props} {...Flex316Cb} {...Flex316IoProps}>
<Image1 className="p-About Image106 bpt" {...Image106Props} {...Image106Cb} {...Image106IoProps}/>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-About Flex247 bpt" {...Flex247Props} {...Flex247Cb} {...Flex247IoProps}>
<Flex1 className="p-About Flex248 bpt" {...Flex248Props} {...Flex248Cb} {...Flex248IoProps}>
<TextBox1 className="p-About TextBox182 bpt" {...TextBox182Props} {...TextBox182Cb} {...TextBox182IoProps}/>
<TextBox1 className="p-About TextBox183 bpt" {...TextBox183Props} {...TextBox183Cb} {...TextBox183IoProps}/>
</Flex1>
<Flex1 className="p-About Flex249 bpt" {...Flex249Props} {...Flex249Cb} {...Flex249IoProps}>
<Flex1 className="p-About Flex250 bpt" {...Flex250Props} {...Flex250Cb} {...Flex250IoProps}>
<Flex1 className="p-About Flex251 bpt" {...Flex251Props} {...Flex251Cb} {...Flex251IoProps}>
<Image1 className="p-About Image85 bpt" {...Image85Props} {...Image85Cb} {...Image85IoProps}/>
<Flex1 className="p-About Flex253 bpt" {...Flex253Props} {...Flex253Cb} {...Flex253IoProps}>
<TextBox1 className="p-About TextBox184 bpt" {...TextBox184Props} {...TextBox184Cb} {...TextBox184IoProps}/>
<TextBox1 className="p-About TextBox185 bpt" {...TextBox185Props} {...TextBox185Cb} {...TextBox185IoProps}/>
<TextBox1 className="p-About TextBox186 bpt" {...TextBox186Props} {...TextBox186Cb} {...TextBox186IoProps}/>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-About Flex257 bpt" {...Flex257Props} {...Flex257Cb} {...Flex257IoProps}>
<Image1 className="p-About Image87 bpt" {...Image87Props} {...Image87Cb} {...Image87IoProps}/>
<Flex1 className="p-About Flex256 bpt" {...Flex256Props} {...Flex256Cb} {...Flex256IoProps}>
<TextBox1 className="p-About TextBox192 bpt" {...TextBox192Props} {...TextBox192Cb} {...TextBox192IoProps}/>
<TextBox1 className="p-About TextBox191 bpt" {...TextBox191Props} {...TextBox191Cb} {...TextBox191IoProps}/>
<TextBox1 className="p-About TextBox190 bpt" {...TextBox190Props} {...TextBox190Cb} {...TextBox190IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-About Flex255 bpt" {...Flex255Props} {...Flex255Cb} {...Flex255IoProps}>
<Image1 className="p-About Image86 bpt" {...Image86Props} {...Image86Cb} {...Image86IoProps}/>
<Flex1 className="p-About Flex254 bpt" {...Flex254Props} {...Flex254Cb} {...Flex254IoProps}>
<TextBox1 className="p-About TextBox189 bpt" {...TextBox189Props} {...TextBox189Cb} {...TextBox189IoProps}/>
<TextBox1 className="p-About TextBox188 bpt" {...TextBox188Props} {...TextBox188Cb} {...TextBox188IoProps}/>
<TextBox1 className="p-About TextBox187 bpt" {...TextBox187Props} {...TextBox187Cb} {...TextBox187IoProps}/>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-About Flex264 bpt" {...Flex264Props} {...Flex264Cb} {...Flex264IoProps}>
<TextBox1 className="p-About TextBox193 bpt" {...TextBox193Props} {...TextBox193Cb} {...TextBox193IoProps}/>
</Flex1>
<Flex1 className="p-About Flex263 bpt" {...Flex263Props} {...Flex263Cb} {...Flex263IoProps}>
<Flex1 className="p-About Flex270 bpt" {...Flex270Props} {...Flex270Cb} {...Flex270IoProps}>
<Flex1 className="p-About Flex271 bpt" {...Flex271Props} {...Flex271Cb} {...Flex271IoProps}>
<Flex1 className="p-About Flex272 bpt" {...Flex272Props} {...Flex272Cb} {...Flex272IoProps}>
<Flex1 className="p-About Flex275 bpt" {...Flex275Props} {...Flex275Cb} {...Flex275IoProps}>
<Flex1 className="p-About Flex276 bpt" {...Flex276Props} {...Flex276Cb} {...Flex276IoProps}>
<Flex1 className="p-About Flex280 bpt" {...Flex280Props} {...Flex280Cb} {...Flex280IoProps}>
<Flex1 className="p-About Flex302 bpt" {...Flex302Props} {...Flex302Cb} {...Flex302IoProps}>
<Image1 className="p-About Image100 bpt" {...Image100Props} {...Image100Cb} {...Image100IoProps}/>
<Flex1 className="p-About Flex301 bpt" {...Flex301Props} {...Flex301Cb} {...Flex301IoProps}>
<TextBox1 className="p-About TextBox217 bpt" {...TextBox217Props} {...TextBox217Cb} {...TextBox217IoProps}/>
</Flex1>
<TextBox1 className="p-About TextBox218 bpt" {...TextBox218Props} {...TextBox218Cb} {...TextBox218IoProps}/>
</Flex1>
<Flex1 className="p-About Flex288 bpt" {...Flex288Props} {...Flex288Cb} {...Flex288IoProps}>
<Image1 className="p-About Image93 bpt" {...Image93Props} {...Image93Cb} {...Image93IoProps}/>
<Flex1 className="p-About Flex287 bpt" {...Flex287Props} {...Flex287Cb} {...Flex287IoProps}>
<TextBox1 className="p-About TextBox203 bpt" {...TextBox203Props} {...TextBox203Cb} {...TextBox203IoProps}/>
</Flex1>
<TextBox1 className="p-About TextBox204 bpt" {...TextBox204Props} {...TextBox204Cb} {...TextBox204IoProps}/>
</Flex1>
<Flex1 className="p-About Flex286 bpt" {...Flex286Props} {...Flex286Cb} {...Flex286IoProps}>
<Image1 className="p-About Image92 bpt" {...Image92Props} {...Image92Cb} {...Image92IoProps}/>
<Flex1 className="p-About Flex285 bpt" {...Flex285Props} {...Flex285Cb} {...Flex285IoProps}>
<TextBox1 className="p-About TextBox201 bpt" {...TextBox201Props} {...TextBox201Cb} {...TextBox201IoProps}/>
</Flex1>
<TextBox1 className="p-About TextBox202 bpt" {...TextBox202Props} {...TextBox202Cb} {...TextBox202IoProps}/>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-About Flex277 bpt" {...Flex277Props} {...Flex277Cb} {...Flex277IoProps}>
<Flex1 className="p-About Flex309 bpt" {...Flex309Props} {...Flex309Cb} {...Flex309IoProps}>
<Flex1 className="p-About Flex306 bpt" {...Flex306Props} {...Flex306Cb} {...Flex306IoProps}>
<Image1 className="p-About Image101 bpt" {...Image101Props} {...Image101Cb} {...Image101IoProps}/>
<Flex1 className="p-About Flex303 bpt" {...Flex303Props} {...Flex303Cb} {...Flex303IoProps}>
<TextBox1 className="p-About TextBox219 bpt" {...TextBox219Props} {...TextBox219Cb} {...TextBox219IoProps}/>
</Flex1>
<TextBox1 className="p-About TextBox222 bpt" {...TextBox222Props} {...TextBox222Cb} {...TextBox222IoProps}/>
</Flex1>
<Flex1 className="p-About Flex307 bpt" {...Flex307Props} {...Flex307Cb} {...Flex307IoProps}>
<Image1 className="p-About Image102 bpt" {...Image102Props} {...Image102Cb} {...Image102IoProps}/>
<Flex1 className="p-About Flex304 bpt" {...Flex304Props} {...Flex304Cb} {...Flex304IoProps}>
<TextBox1 className="p-About TextBox220 bpt" {...TextBox220Props} {...TextBox220Cb} {...TextBox220IoProps}/>
</Flex1>
<TextBox1 className="p-About TextBox223 bpt" {...TextBox223Props} {...TextBox223Cb} {...TextBox223IoProps}/>
</Flex1>
<Flex1 className="p-About Flex308 bpt" {...Flex308Props} {...Flex308Cb} {...Flex308IoProps}>
<Image1 className="p-About Image103 bpt" {...Image103Props} {...Image103Cb} {...Image103IoProps}/>
<Flex1 className="p-About Flex305 bpt" {...Flex305Props} {...Flex305Cb} {...Flex305IoProps}>
<TextBox1 className="p-About TextBox221 bpt" {...TextBox221Props} {...TextBox221Cb} {...TextBox221IoProps}/>
</Flex1>
<TextBox1 className="p-About TextBox224 bpt" {...TextBox224Props} {...TextBox224Cb} {...TextBox224IoProps}/>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-About Flex268 bpt" {...Flex268Props} {...Flex268Cb} {...Flex268IoProps}/>
</Flex1>
<Flex1 className="p-About Flex266 bpt" {...Flex266Props} {...Flex266Cb} {...Flex266IoProps}/>
<Carousel1 className="p-About Carousel3 bpt" {...Carousel3Props} {...Carousel3Cb} {...Carousel3IoProps}/>
<Flex1 className="p-About Flex267 bpt" {...Flex267Props} {...Flex267Cb} {...Flex267IoProps}/>
  </>);
}
