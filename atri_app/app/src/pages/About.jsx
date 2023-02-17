import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div as Div1 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Carousel as Carousel1 } from "@atrilabs/react-component-manifests/src/manifests/Carousel/Carousel.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image1 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Button as Button1 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { useFlex247Cb, useFlex248Cb, useFlex249Cb, useFlex250Cb, useFlex251Cb, useFlex253Cb, useFlex255Cb, useFlex254Cb, useFlex257Cb, useFlex256Cb, useFlex262Cb, useFlex311Cb, useFlex313Cb, useFlex314Cb, useFlex317Cb, useFlex315Cb, useFlex316Cb, useFlex328Cb, useFlex329Cb, useFlex330Cb, useFlex264Cb, useFlex263Cb, useFlex268Cb, useFlex332Cb, useFlex270Cb, useFlex271Cb, useFlex272Cb, useFlex275Cb, useFlex276Cb, useFlex280Cb, useFlex286Cb, useFlex285Cb, useFlex288Cb, useFlex287Cb, useFlex302Cb, useFlex301Cb, useFlex277Cb, useFlex309Cb, useFlex306Cb, useFlex303Cb, useFlex307Cb, useFlex304Cb, useFlex308Cb, useFlex305Cb, useFlex437Cb, useFlex436Cb, useDiv45Cb, useFlex434Cb, useFlex433Cb, useFlex432Cb, useFlex430Cb, useFlex431Cb, useFlex435Cb, useFlex448Cb, useFlex447Cb, useDiv48Cb, useFlex444Cb, useFlex442Cb, useFlex443Cb, useFlex445Cb, useDiv49Cb, useDiv47Cb, useDiv46Cb, useFlex441Cb, useFlex439Cb, useFlex438Cb, useFlex440Cb, useFlex449Cb, useFlex446Cb, useFlex310Cb, useFlex318Cb, useFlex323Cb, useFlex319Cb, useFlex320Cb, useFlex322Cb, useFlex321Cb, useFlex415Cb, useFlex413Cb, useFlex414Cb, useCarousel3Cb, useTextBox182Cb, useTextBox183Cb, useImage85Cb, useTextBox184Cb, useTextBox185Cb, useTextBox186Cb, useImage86Cb, useTextBox187Cb, useTextBox188Cb, useTextBox189Cb, useImage87Cb, useTextBox190Cb, useTextBox191Cb, useTextBox192Cb, useImage104Cb, useTextBox225Cb, useTextBox226Cb, useButton31Cb, useTextBox227Cb, useTextBox228Cb, useButton32Cb, useTextBox229Cb, useTextBox230Cb, useImage106Cb, useImage110Cb, useImage112Cb, useImage113Cb, useImage114Cb, useTextBox233Cb, useTextBox193Cb, useTextBox234Cb, useButton33Cb, useTextBox202Cb, useImage92Cb, useTextBox201Cb, useTextBox204Cb, useImage93Cb, useTextBox203Cb, useTextBox218Cb, useImage100Cb, useTextBox217Cb, useImage101Cb, useTextBox222Cb, useTextBox219Cb, useImage102Cb, useTextBox223Cb, useTextBox220Cb, useImage103Cb, useTextBox224Cb, useTextBox221Cb, useImage169Cb, useImage164Cb, useImage165Cb, useImage166Cb, useImage167Cb, useImage168Cb, useImage170Cb, useImage171Cb, useImage172Cb, useImage173Cb, useTextBox377Cb, useTextBox361Cb, useTextBox362Cb, useTextBox363Cb, useTextBox364Cb, useTextBox365Cb, useTextBox366Cb, useTextBox367Cb, useTextBox368Cb, useTextBox369Cb, useTextBox370Cb, useTextBox371Cb, useTextBox372Cb, useTextBox373Cb, useTextBox374Cb, useTextBox375Cb, useTextBox376Cb, useImage179Cb, useTextBox378Cb, useImage174Cb, useImage175Cb, useImage176Cb, useImage177Cb, useImage178Cb, useFlex324Cb, useImage108Cb, useTextBox231Cb, useTextBox232Cb, useImage107Cb, useButton57Cb, useButton58Cb, useImage152Cb, useTextBox333Cb, useTextBox334Cb, useTextBox335Cb, useTextBox336Cb, useTextBox337Cb } from "../page-cbs/About";
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
const Flex268Props = useStore((state)=>state["About"]["Flex268"]);
const Flex268IoProps = useIoStore((state)=>state["About"]["Flex268"]);
const Flex268Cb = useFlex268Cb()
const Flex332Props = useStore((state)=>state["About"]["Flex332"]);
const Flex332IoProps = useIoStore((state)=>state["About"]["Flex332"]);
const Flex332Cb = useFlex332Cb()
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
const Flex437Props = useStore((state)=>state["About"]["Flex437"]);
const Flex437IoProps = useIoStore((state)=>state["About"]["Flex437"]);
const Flex437Cb = useFlex437Cb()
const Flex436Props = useStore((state)=>state["About"]["Flex436"]);
const Flex436IoProps = useIoStore((state)=>state["About"]["Flex436"]);
const Flex436Cb = useFlex436Cb()
const Div45Props = useStore((state)=>state["About"]["Div45"]);
const Div45IoProps = useIoStore((state)=>state["About"]["Div45"]);
const Div45Cb = useDiv45Cb()
const Flex434Props = useStore((state)=>state["About"]["Flex434"]);
const Flex434IoProps = useIoStore((state)=>state["About"]["Flex434"]);
const Flex434Cb = useFlex434Cb()
const Flex433Props = useStore((state)=>state["About"]["Flex433"]);
const Flex433IoProps = useIoStore((state)=>state["About"]["Flex433"]);
const Flex433Cb = useFlex433Cb()
const Flex432Props = useStore((state)=>state["About"]["Flex432"]);
const Flex432IoProps = useIoStore((state)=>state["About"]["Flex432"]);
const Flex432Cb = useFlex432Cb()
const Flex430Props = useStore((state)=>state["About"]["Flex430"]);
const Flex430IoProps = useIoStore((state)=>state["About"]["Flex430"]);
const Flex430Cb = useFlex430Cb()
const Flex431Props = useStore((state)=>state["About"]["Flex431"]);
const Flex431IoProps = useIoStore((state)=>state["About"]["Flex431"]);
const Flex431Cb = useFlex431Cb()
const Flex435Props = useStore((state)=>state["About"]["Flex435"]);
const Flex435IoProps = useIoStore((state)=>state["About"]["Flex435"]);
const Flex435Cb = useFlex435Cb()
const Flex448Props = useStore((state)=>state["About"]["Flex448"]);
const Flex448IoProps = useIoStore((state)=>state["About"]["Flex448"]);
const Flex448Cb = useFlex448Cb()
const Flex447Props = useStore((state)=>state["About"]["Flex447"]);
const Flex447IoProps = useIoStore((state)=>state["About"]["Flex447"]);
const Flex447Cb = useFlex447Cb()
const Div48Props = useStore((state)=>state["About"]["Div48"]);
const Div48IoProps = useIoStore((state)=>state["About"]["Div48"]);
const Div48Cb = useDiv48Cb()
const Flex444Props = useStore((state)=>state["About"]["Flex444"]);
const Flex444IoProps = useIoStore((state)=>state["About"]["Flex444"]);
const Flex444Cb = useFlex444Cb()
const Flex442Props = useStore((state)=>state["About"]["Flex442"]);
const Flex442IoProps = useIoStore((state)=>state["About"]["Flex442"]);
const Flex442Cb = useFlex442Cb()
const Flex443Props = useStore((state)=>state["About"]["Flex443"]);
const Flex443IoProps = useIoStore((state)=>state["About"]["Flex443"]);
const Flex443Cb = useFlex443Cb()
const Flex445Props = useStore((state)=>state["About"]["Flex445"]);
const Flex445IoProps = useIoStore((state)=>state["About"]["Flex445"]);
const Flex445Cb = useFlex445Cb()
const Div49Props = useStore((state)=>state["About"]["Div49"]);
const Div49IoProps = useIoStore((state)=>state["About"]["Div49"]);
const Div49Cb = useDiv49Cb()
const Div47Props = useStore((state)=>state["About"]["Div47"]);
const Div47IoProps = useIoStore((state)=>state["About"]["Div47"]);
const Div47Cb = useDiv47Cb()
const Div46Props = useStore((state)=>state["About"]["Div46"]);
const Div46IoProps = useIoStore((state)=>state["About"]["Div46"]);
const Div46Cb = useDiv46Cb()
const Flex441Props = useStore((state)=>state["About"]["Flex441"]);
const Flex441IoProps = useIoStore((state)=>state["About"]["Flex441"]);
const Flex441Cb = useFlex441Cb()
const Flex439Props = useStore((state)=>state["About"]["Flex439"]);
const Flex439IoProps = useIoStore((state)=>state["About"]["Flex439"]);
const Flex439Cb = useFlex439Cb()
const Flex438Props = useStore((state)=>state["About"]["Flex438"]);
const Flex438IoProps = useIoStore((state)=>state["About"]["Flex438"]);
const Flex438Cb = useFlex438Cb()
const Flex440Props = useStore((state)=>state["About"]["Flex440"]);
const Flex440IoProps = useIoStore((state)=>state["About"]["Flex440"]);
const Flex440Cb = useFlex440Cb()
const Flex449Props = useStore((state)=>state["About"]["Flex449"]);
const Flex449IoProps = useIoStore((state)=>state["About"]["Flex449"]);
const Flex449Cb = useFlex449Cb()
const Flex446Props = useStore((state)=>state["About"]["Flex446"]);
const Flex446IoProps = useIoStore((state)=>state["About"]["Flex446"]);
const Flex446Cb = useFlex446Cb()
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
const Flex415Props = useStore((state)=>state["About"]["Flex415"]);
const Flex415IoProps = useIoStore((state)=>state["About"]["Flex415"]);
const Flex415Cb = useFlex415Cb()
const Flex413Props = useStore((state)=>state["About"]["Flex413"]);
const Flex413IoProps = useIoStore((state)=>state["About"]["Flex413"]);
const Flex413Cb = useFlex413Cb()
const Flex414Props = useStore((state)=>state["About"]["Flex414"]);
const Flex414IoProps = useIoStore((state)=>state["About"]["Flex414"]);
const Flex414Cb = useFlex414Cb()
const Carousel3Props = useStore((state)=>state["About"]["Carousel3"]);
const Carousel3IoProps = useIoStore((state)=>state["About"]["Carousel3"]);
const Carousel3Cb = useCarousel3Cb()
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
const TextBox234Props = useStore((state)=>state["About"]["TextBox234"]);
const TextBox234IoProps = useIoStore((state)=>state["About"]["TextBox234"]);
const TextBox234Cb = useTextBox234Cb()
const Button33Props = useStore((state)=>state["About"]["Button33"]);
const Button33IoProps = useIoStore((state)=>state["About"]["Button33"]);
const Button33Cb = useButton33Cb()
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
const Image169Props = useStore((state)=>state["About"]["Image169"]);
const Image169IoProps = useIoStore((state)=>state["About"]["Image169"]);
const Image169Cb = useImage169Cb()
const Image164Props = useStore((state)=>state["About"]["Image164"]);
const Image164IoProps = useIoStore((state)=>state["About"]["Image164"]);
const Image164Cb = useImage164Cb()
const Image165Props = useStore((state)=>state["About"]["Image165"]);
const Image165IoProps = useIoStore((state)=>state["About"]["Image165"]);
const Image165Cb = useImage165Cb()
const Image166Props = useStore((state)=>state["About"]["Image166"]);
const Image166IoProps = useIoStore((state)=>state["About"]["Image166"]);
const Image166Cb = useImage166Cb()
const Image167Props = useStore((state)=>state["About"]["Image167"]);
const Image167IoProps = useIoStore((state)=>state["About"]["Image167"]);
const Image167Cb = useImage167Cb()
const Image168Props = useStore((state)=>state["About"]["Image168"]);
const Image168IoProps = useIoStore((state)=>state["About"]["Image168"]);
const Image168Cb = useImage168Cb()
const Image170Props = useStore((state)=>state["About"]["Image170"]);
const Image170IoProps = useIoStore((state)=>state["About"]["Image170"]);
const Image170Cb = useImage170Cb()
const Image171Props = useStore((state)=>state["About"]["Image171"]);
const Image171IoProps = useIoStore((state)=>state["About"]["Image171"]);
const Image171Cb = useImage171Cb()
const Image172Props = useStore((state)=>state["About"]["Image172"]);
const Image172IoProps = useIoStore((state)=>state["About"]["Image172"]);
const Image172Cb = useImage172Cb()
const Image173Props = useStore((state)=>state["About"]["Image173"]);
const Image173IoProps = useIoStore((state)=>state["About"]["Image173"]);
const Image173Cb = useImage173Cb()
const TextBox377Props = useStore((state)=>state["About"]["TextBox377"]);
const TextBox377IoProps = useIoStore((state)=>state["About"]["TextBox377"]);
const TextBox377Cb = useTextBox377Cb()
const TextBox361Props = useStore((state)=>state["About"]["TextBox361"]);
const TextBox361IoProps = useIoStore((state)=>state["About"]["TextBox361"]);
const TextBox361Cb = useTextBox361Cb()
const TextBox362Props = useStore((state)=>state["About"]["TextBox362"]);
const TextBox362IoProps = useIoStore((state)=>state["About"]["TextBox362"]);
const TextBox362Cb = useTextBox362Cb()
const TextBox363Props = useStore((state)=>state["About"]["TextBox363"]);
const TextBox363IoProps = useIoStore((state)=>state["About"]["TextBox363"]);
const TextBox363Cb = useTextBox363Cb()
const TextBox364Props = useStore((state)=>state["About"]["TextBox364"]);
const TextBox364IoProps = useIoStore((state)=>state["About"]["TextBox364"]);
const TextBox364Cb = useTextBox364Cb()
const TextBox365Props = useStore((state)=>state["About"]["TextBox365"]);
const TextBox365IoProps = useIoStore((state)=>state["About"]["TextBox365"]);
const TextBox365Cb = useTextBox365Cb()
const TextBox366Props = useStore((state)=>state["About"]["TextBox366"]);
const TextBox366IoProps = useIoStore((state)=>state["About"]["TextBox366"]);
const TextBox366Cb = useTextBox366Cb()
const TextBox367Props = useStore((state)=>state["About"]["TextBox367"]);
const TextBox367IoProps = useIoStore((state)=>state["About"]["TextBox367"]);
const TextBox367Cb = useTextBox367Cb()
const TextBox368Props = useStore((state)=>state["About"]["TextBox368"]);
const TextBox368IoProps = useIoStore((state)=>state["About"]["TextBox368"]);
const TextBox368Cb = useTextBox368Cb()
const TextBox369Props = useStore((state)=>state["About"]["TextBox369"]);
const TextBox369IoProps = useIoStore((state)=>state["About"]["TextBox369"]);
const TextBox369Cb = useTextBox369Cb()
const TextBox370Props = useStore((state)=>state["About"]["TextBox370"]);
const TextBox370IoProps = useIoStore((state)=>state["About"]["TextBox370"]);
const TextBox370Cb = useTextBox370Cb()
const TextBox371Props = useStore((state)=>state["About"]["TextBox371"]);
const TextBox371IoProps = useIoStore((state)=>state["About"]["TextBox371"]);
const TextBox371Cb = useTextBox371Cb()
const TextBox372Props = useStore((state)=>state["About"]["TextBox372"]);
const TextBox372IoProps = useIoStore((state)=>state["About"]["TextBox372"]);
const TextBox372Cb = useTextBox372Cb()
const TextBox373Props = useStore((state)=>state["About"]["TextBox373"]);
const TextBox373IoProps = useIoStore((state)=>state["About"]["TextBox373"]);
const TextBox373Cb = useTextBox373Cb()
const TextBox374Props = useStore((state)=>state["About"]["TextBox374"]);
const TextBox374IoProps = useIoStore((state)=>state["About"]["TextBox374"]);
const TextBox374Cb = useTextBox374Cb()
const TextBox375Props = useStore((state)=>state["About"]["TextBox375"]);
const TextBox375IoProps = useIoStore((state)=>state["About"]["TextBox375"]);
const TextBox375Cb = useTextBox375Cb()
const TextBox376Props = useStore((state)=>state["About"]["TextBox376"]);
const TextBox376IoProps = useIoStore((state)=>state["About"]["TextBox376"]);
const TextBox376Cb = useTextBox376Cb()
const Image179Props = useStore((state)=>state["About"]["Image179"]);
const Image179IoProps = useIoStore((state)=>state["About"]["Image179"]);
const Image179Cb = useImage179Cb()
const TextBox378Props = useStore((state)=>state["About"]["TextBox378"]);
const TextBox378IoProps = useIoStore((state)=>state["About"]["TextBox378"]);
const TextBox378Cb = useTextBox378Cb()
const Image174Props = useStore((state)=>state["About"]["Image174"]);
const Image174IoProps = useIoStore((state)=>state["About"]["Image174"]);
const Image174Cb = useImage174Cb()
const Image175Props = useStore((state)=>state["About"]["Image175"]);
const Image175IoProps = useIoStore((state)=>state["About"]["Image175"]);
const Image175Cb = useImage175Cb()
const Image176Props = useStore((state)=>state["About"]["Image176"]);
const Image176IoProps = useIoStore((state)=>state["About"]["Image176"]);
const Image176Cb = useImage176Cb()
const Image177Props = useStore((state)=>state["About"]["Image177"]);
const Image177IoProps = useIoStore((state)=>state["About"]["Image177"]);
const Image177Cb = useImage177Cb()
const Image178Props = useStore((state)=>state["About"]["Image178"]);
const Image178IoProps = useIoStore((state)=>state["About"]["Image178"]);
const Image178Cb = useImage178Cb()
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
const Button57Props = useStore((state)=>state["About"]["Button57"]);
const Button57IoProps = useIoStore((state)=>state["About"]["Button57"]);
const Button57Cb = useButton57Cb()
const Button58Props = useStore((state)=>state["About"]["Button58"]);
const Button58IoProps = useIoStore((state)=>state["About"]["Button58"]);
const Button58Cb = useButton58Cb()
const Image152Props = useStore((state)=>state["About"]["Image152"]);
const Image152IoProps = useIoStore((state)=>state["About"]["Image152"]);
const Image152Cb = useImage152Cb()
const TextBox333Props = useStore((state)=>state["About"]["TextBox333"]);
const TextBox333IoProps = useIoStore((state)=>state["About"]["TextBox333"]);
const TextBox333Cb = useTextBox333Cb()
const TextBox334Props = useStore((state)=>state["About"]["TextBox334"]);
const TextBox334IoProps = useIoStore((state)=>state["About"]["TextBox334"]);
const TextBox334Cb = useTextBox334Cb()
const TextBox335Props = useStore((state)=>state["About"]["TextBox335"]);
const TextBox335IoProps = useIoStore((state)=>state["About"]["TextBox335"]);
const TextBox335Cb = useTextBox335Cb()
const TextBox336Props = useStore((state)=>state["About"]["TextBox336"]);
const TextBox336IoProps = useIoStore((state)=>state["About"]["TextBox336"]);
const TextBox336Cb = useTextBox336Cb()
const TextBox337Props = useStore((state)=>state["About"]["TextBox337"]);
const TextBox337IoProps = useIoStore((state)=>state["About"]["TextBox337"]);
const TextBox337Cb = useTextBox337Cb()

  return (<>
  <Flex1 className="p-About Flex415 bpt" {...Flex415Props} {...Flex415Cb} {...Flex415IoProps}>
<Flex1 className="p-About Flex414 bpt" {...Flex414Props} {...Flex414Cb} {...Flex414IoProps}>
<Image1 className="p-About Image152 bpt" {...Image152Props} {...Image152Cb} {...Image152IoProps}/>
<TextBox1 className="p-About TextBox337 bpt" {...TextBox337Props} {...TextBox337Cb} {...TextBox337IoProps}/>
<TextBox1 className="p-About TextBox336 bpt" {...TextBox336Props} {...TextBox336Cb} {...TextBox336IoProps}/>
<TextBox1 className="p-About TextBox335 bpt" {...TextBox335Props} {...TextBox335Cb} {...TextBox335IoProps}/>
<TextBox1 className="p-About TextBox334 bpt" {...TextBox334Props} {...TextBox334Cb} {...TextBox334IoProps}/>
<TextBox1 className="p-About TextBox333 bpt" {...TextBox333Props} {...TextBox333Cb} {...TextBox333IoProps}/>
</Flex1>
<Flex1 className="p-About Flex413 bpt" {...Flex413Props} {...Flex413Cb} {...Flex413IoProps}>
<Button1 className="p-About Button57 bpt" {...Button57Props} {...Button57Cb} {...Button57IoProps}/>
<Button1 className="p-About Button58 bpt" {...Button58Props} {...Button58Cb} {...Button58IoProps}/>
</Flex1>
</Flex1>
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
<Flex1 className="p-About Flex268 bpt" {...Flex268Props} {...Flex268Cb} {...Flex268IoProps}>
<Flex1 className="p-About Flex332 bpt" {...Flex332Props} {...Flex332Cb} {...Flex332IoProps}>
<TextBox1 className="p-About TextBox234 bpt" {...TextBox234Props} {...TextBox234Cb} {...TextBox234IoProps}/>
<Button1 className="p-About Button33 bpt" {...Button33Props} {...Button33Cb} {...Button33IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-About Flex437 bpt" {...Flex437Props} {...Flex437Cb} {...Flex437IoProps}>
<Flex1 className="p-About Flex436 bpt" {...Flex436Props} {...Flex436Cb} {...Flex436IoProps}>
<Flex1 className="p-About Flex435 bpt" {...Flex435Props} {...Flex435Cb} {...Flex435IoProps}>
<Image1 className="p-About Image168 bpt" {...Image168Props} {...Image168Cb} {...Image168IoProps}/>
</Flex1>
<Image1 className="p-About Image169 bpt" {...Image169Props} {...Image169Cb} {...Image169IoProps}/>
<Div1 className="p-About Div45 bpt" {...Div45Props} {...Div45Cb} {...Div45IoProps}>
<Flex1 className="p-About Flex434 bpt" {...Flex434Props} {...Flex434Cb} {...Flex434IoProps}>
<Flex1 className="p-About Flex433 bpt" {...Flex433Props} {...Flex433Cb} {...Flex433IoProps}>
<Flex1 className="p-About Flex432 bpt" {...Flex432Props} {...Flex432Cb} {...Flex432IoProps}>
<Flex1 className="p-About Flex430 bpt" {...Flex430Props} {...Flex430Cb} {...Flex430IoProps}>
<Image1 className="p-About Image164 bpt" {...Image164Props} {...Image164Cb} {...Image164IoProps}/>
<Image1 className="p-About Image165 bpt" {...Image165Props} {...Image165Cb} {...Image165IoProps}/>
</Flex1>
<Flex1 className="p-About Flex431 bpt" {...Flex431Props} {...Flex431Cb} {...Flex431IoProps}>
<Image1 className="p-About Image166 bpt" {...Image166Props} {...Image166Cb} {...Image166IoProps}/>
<Image1 className="p-About Image167 bpt" {...Image167Props} {...Image167Cb} {...Image167IoProps}/>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
</Div1>
</Flex1>
</Flex1>
<Flex1 className="p-About Flex448 bpt" {...Flex448Props} {...Flex448Cb} {...Flex448IoProps}>
<Flex1 className="p-About Flex447 bpt" {...Flex447Props} {...Flex447Cb} {...Flex447IoProps}>
<Flex1 className="p-About Flex449 bpt" {...Flex449Props} {...Flex449Cb} {...Flex449IoProps}>
<Image1 className="p-About Image179 bpt" {...Image179Props} {...Image179Cb} {...Image179IoProps}/>
<TextBox1 className="p-About TextBox378 bpt" {...TextBox378Props} {...TextBox378Cb} {...TextBox378IoProps}/>
<Flex1 className="p-About Flex446 bpt" {...Flex446Props} {...Flex446Cb} {...Flex446IoProps}>
<Image1 className="p-About Image178 bpt" {...Image178Props} {...Image178Cb} {...Image178IoProps}/>
<Image1 className="p-About Image177 bpt" {...Image177Props} {...Image177Cb} {...Image177IoProps}/>
<Image1 className="p-About Image176 bpt" {...Image176Props} {...Image176Cb} {...Image176IoProps}/>
<Image1 className="p-About Image175 bpt" {...Image175Props} {...Image175Cb} {...Image175IoProps}/>
<Image1 className="p-About Image174 bpt" {...Image174Props} {...Image174Cb} {...Image174IoProps}/>
</Flex1>
</Flex1>
<Div1 className="p-About Div49 bpt" {...Div49Props} {...Div49Cb} {...Div49IoProps}>
<Div1 className="p-About Div47 bpt" {...Div47Props} {...Div47Cb} {...Div47IoProps}>
<Div1 className="p-About Div46 bpt" {...Div46Props} {...Div46Cb} {...Div46IoProps}>
<Flex1 className="p-About Flex441 bpt" {...Flex441Props} {...Flex441Cb} {...Flex441IoProps}>
<Flex1 className="p-About Flex440 bpt" {...Flex440Props} {...Flex440Cb} {...Flex440IoProps}>
<TextBox1 className="p-About TextBox376 bpt" {...TextBox376Props} {...TextBox376Cb} {...TextBox376IoProps}/>
<TextBox1 className="p-About TextBox375 bpt" {...TextBox375Props} {...TextBox375Cb} {...TextBox375IoProps}/>
<TextBox1 className="p-About TextBox374 bpt" {...TextBox374Props} {...TextBox374Cb} {...TextBox374IoProps}/>
<TextBox1 className="p-About TextBox373 bpt" {...TextBox373Props} {...TextBox373Cb} {...TextBox373IoProps}/>
<TextBox1 className="p-About TextBox372 bpt" {...TextBox372Props} {...TextBox372Cb} {...TextBox372IoProps}/>
<TextBox1 className="p-About TextBox371 bpt" {...TextBox371Props} {...TextBox371Cb} {...TextBox371IoProps}/>
<TextBox1 className="p-About TextBox370 bpt" {...TextBox370Props} {...TextBox370Cb} {...TextBox370IoProps}/>
<TextBox1 className="p-About TextBox369 bpt" {...TextBox369Props} {...TextBox369Cb} {...TextBox369IoProps}/>
</Flex1>
<Flex1 className="p-About Flex439 bpt" {...Flex439Props} {...Flex439Cb} {...Flex439IoProps}>
<Flex1 className="p-About Flex438 bpt" {...Flex438Props} {...Flex438Cb} {...Flex438IoProps}>
<TextBox1 className="p-About TextBox361 bpt" {...TextBox361Props} {...TextBox361Cb} {...TextBox361IoProps}/>
<TextBox1 className="p-About TextBox362 bpt" {...TextBox362Props} {...TextBox362Cb} {...TextBox362IoProps}/>
<TextBox1 className="p-About TextBox363 bpt" {...TextBox363Props} {...TextBox363Cb} {...TextBox363IoProps}/>
<TextBox1 className="p-About TextBox364 bpt" {...TextBox364Props} {...TextBox364Cb} {...TextBox364IoProps}/>
<TextBox1 className="p-About TextBox365 bpt" {...TextBox365Props} {...TextBox365Cb} {...TextBox365IoProps}/>
<TextBox1 className="p-About TextBox366 bpt" {...TextBox366Props} {...TextBox366Cb} {...TextBox366IoProps}/>
<TextBox1 className="p-About TextBox367 bpt" {...TextBox367Props} {...TextBox367Cb} {...TextBox367IoProps}/>
<TextBox1 className="p-About TextBox368 bpt" {...TextBox368Props} {...TextBox368Cb} {...TextBox368IoProps}/>
</Flex1>
</Flex1>
</Flex1>
</Div1>
</Div1>
</Div1>
<Div1 className="p-About Div48 bpt" {...Div48Props} {...Div48Cb} {...Div48IoProps}>
<Flex1 className="p-About Flex445 bpt" {...Flex445Props} {...Flex445Cb} {...Flex445IoProps}>
<TextBox1 className="p-About TextBox377 bpt" {...TextBox377Props} {...TextBox377Cb} {...TextBox377IoProps}/>
</Flex1>
<Flex1 className="p-About Flex444 bpt" {...Flex444Props} {...Flex444Cb} {...Flex444IoProps}>
<Flex1 className="p-About Flex443 bpt" {...Flex443Props} {...Flex443Cb} {...Flex443IoProps}>
<Image1 className="p-About Image173 bpt" {...Image173Props} {...Image173Cb} {...Image173IoProps}/>
<Image1 className="p-About Image172 bpt" {...Image172Props} {...Image172Cb} {...Image172IoProps}/>
</Flex1>
<Flex1 className="p-About Flex442 bpt" {...Flex442Props} {...Flex442Cb} {...Flex442IoProps}>
<Image1 className="p-About Image171 bpt" {...Image171Props} {...Image171Cb} {...Image171IoProps}/>
<Image1 className="p-About Image170 bpt" {...Image170Props} {...Image170Cb} {...Image170IoProps}/>
</Flex1>
</Flex1>
</Div1>
</Flex1>
</Flex1>
</Flex1>
<Carousel1 className="p-About Carousel3 bpt" {...Carousel3Props} {...Carousel3Cb} {...Carousel3IoProps}/>
  </>);
}
