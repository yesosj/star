import logo from './logo.svg';
import React, {useState} from 'react';
import {Nav, Navbar, Pagination, NavDropdown, Form, FormControl, Button, Container, Accordion} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useNavigate, Link, Route, Routes} from 'react-router-dom';
import styled from 'styled-components';
import Year from './year.js';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
// import { faSadTear } from '@fortawesome/free-regular-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome;'

// const element = <FontAwesomeIcon icon = {faSadTear}/>

// ReactDom.render(element, document.body)
// let title = styled.div`
// `;

function App() {
  let history = useNavigate();

  return (
    <div className="App">
            <>
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand as={Link} to="/">UniV</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">별자리</Nav.Link>
            <Nav.Link as={Link} to="/year">띠</Nav.Link>
            <Nav.Link as={Link} to="/">혈액형</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
           </>
           <Pagination className="pagination">
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item href="/year">{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>
            <Pagination.Item>{6}</Pagination.Item>
            <Pagination.Item>{7}</Pagination.Item>
            <Pagination.Item>{8}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>



          <Routes>

           <Route path="/" element={<Sheep/>} />
{/* 
            <FontAwesomeIcon icon = {faArrowRight}/> */}
            
            {/* <container></container> */}
          
            {/* <div className="bull"></div>
            <div className="twins"></div>
            <div className="crab"></div>
            <div className="lion"></div>
            <div className="virgin"></div>
            <div className="balance"></div>
            <div className="scorpion"></div>
            <div className="archer"></div>
            <div className="goat"></div>
            <div className="waterBottle"></div>
            <div className="fish"></div> */}

    <Route path="/year" element={<Year/>}/>
      

    </Routes>
    </div>
  );
}

function Sheep(){
  return(
    <div className="sheep">

          <div className="SheepImage">
          <h3 style={{color: 'white', fontSize: '40px', fontStyle: 'italic'}}><h3 style={{color: 'white', fontSize: '20px', fontStyle: 'italic'}}>제 1궁</h3> 양자리</h3>         
          </div>

          <div className="container">
          <ul>
            <li><h3>✰ 뜻</h3></li><br />
            ✨ 황도 12궁의 제 <em><strong style={{fontSize: '20px', color: '#999'}}>1궁</strong></em>이며, 12궁으로는 <em><strong style={{fontSize: '20px', color: '#999'}}>3월 21일~4월 19일</strong></em>에 해당한다. ✨
            <hr />

            <li><h3>✰ 성격</h3></li><br />
            <p>✨매사에 적극적인 편이며 토론이나 회의에서도 자신의 의견을 확실하게 표현할 줄 알아요✨</p>
            <p>✨쉽게 화를 내고 성격이 급하며 눈치가 빨라 거짓말을 잘 못해 예의가 없다고 생각할 수 있어요✨</p>
            <p>✨옳지 못한 일을 본다면 계산하지 않고 행동으로 옮기는 성향을 가지며 정의감이 많아요✨</p>
            <p>✨자기중심적이기도 하고 변덕스러운 모습도 있는데 반해 은근히 외로움도 잘 탄다고 해요✨</p>
            <p>✨이기심과, 공격성, 논쟁적인 성격과 행동적인데 우유부단하게 일을 처리하기도 해요✨</p>
            <p>✨편가르기 싸움에는 관심이 일도 없는 성격, 귀차니즘이 강하고 허당스러운 모습이 있어요✨</p>
            <p>✨심심한 걸 잘 참지 못하고 가만히 있지 못하는 성격이라 호기심이 정말 강한 성격이기도 해요✨</p>
            <p>✨도도하게 보이는 것을 좋아하는 편이고 묵묵히 혼자 해결해나가려고 해요✨</p>
            <p>✨자존감이 너무 높아서 남에게 지시 받아 일하는 직장인보다는 높은 곳에 있는 일을 하고 싶어해요✨</p>
            <p>✨자신을 사랑할 줄 알며 정직하기도 하고 늘 새로운 도전을 하고 참신한 계획을 내놓고 싶어 해요✨</p>


            <hr />

            <li><h3>✰ 운세</h3></li><br />
            <h5>2022년 연애운</h5>
            <h6>솔직한 자신의 기분을 소중히 한다</h6>
            <br />
            <p>지금까지의 자신의 연애 본연의 자세를 재검토할 타이밍입니다. 자신의 매력을 잘 알고 있는 양자리는 '연애란 이런 거지' 라고 하는 자신 나름의 연애 철학이 있다고 생각합니다. '이렇게 하면 잘 된다' 라고 하는 어떠한 방법을 야생적인 직감을 기초로 찾아내었지만, 좀처럼 그것이 통용되지 않기 때문에 초조함을 느끼는 일도 있을 겁니다.머뭇거림 때문에 행동하기를 주저하다가는 기회를 놓칠 수도 있습니다. <br /> <br />
            '이러고 싶지만, 좀 어떨까' 라고 자신 속에서 사양이나 겸손, 부끄러움 등을 느끼기 쉬워져 버려, 좀처럼 솔직한 자신의 기분을 표현할 수 없는 것도 있습니다. 그런 상태 중에 경쟁자에게 앞질러 버릴 수도 있고, 좀처럼 생각대로 진전하기 어려울지도 모릅니다. 특히 2022년 1월에는 사랑을 주는 금성이 역행을 시작하기 때문에 더욱 뜻대로 전개되기 어려운 상황이 찾아옵니다. 좋아하는 사람과 감각적, 시간적, 물리적인 거리를 느끼기 시작해 자신의 마음의 망설임이 생기기 쉬워지는 일도. <br /> <br />

            그러나 5월부터는 행운을 주는 행성의 목성이 양자리의 하우스에 들어가기 때문에, 드디어 멋진 사람과 만날 가능성이나, 커플의 경우는 약혼 등의 큰 고비 등이 부드럽게 전개됩니다. 또한 양자리와 같은 불의 별자리인 사자자리에 태양이 들어오는 8월에서 9월까지도 기쁜 일을 기대할 수 있습니다. 또 과거의 연애에서의 쓰라린 경험 등으로 인해 새로운 연애를 시작하지 못할 경우에는 등을 떠밀어주는 계기도 주어질 것입니다. '연애는 이래야 한다' 라고 고집한 자기 나름의 연애 스킬에 사로잡히지 않고, 솔직한 자신의 기분을 소중히 하면 좋을 것입니다. <br /> <br /></p>

            <h5>2022년 직업운</h5>
            <h6>좋아하는 일을 할 수 있다</h6>
            <br />
            <p>2022년의 양자리의 직업운은 매우 호조로 모든 면에서 비약하는 시기입니다. 스킬 업을 목표로 하고 있거나 자격 취득을 위해서 시험이 있는 경우에는, 그것을 향한 노력도 계속해 계속할 수 있고, 또 생각하는 이상으로 레벨 업 해, 실제 시험에서도 그 힘을 남김없이 발휘할 수 있기 때문에, 매우 기쁜 결과를 얻을 수 있습니다. 또 그 성과를 기초로 해 새로운 필드로 변신해, 더욱 활약의 장소가 넓어져 가는 것도 기대할 수 있습니다. 그러나 바락바락 적극적으로 집중해 나가는 것은 5월 이후로 하는 것이 좋을 것 같습니다. <br /> <br />

            그때까지는 준비 기간과 컨디션을 조절하거나 스케줄링을 하고 계획적인 행동을 가다듬어 가면 좋을 것입니다. 이 작업을 해 둠으로써 예상치 못한 일이 발생하더라도 침착하게 대처할 수 있을 것입니다. 특히 1월은 변화를 주는 행성인 천왕성이 찾아옴으로써 큰 상황이나 사회적인 변화가 생기기 쉽고, 당신의 일에도 영향을 미칠 가능성도 있습니다. 자신이 원하지 않아도 변화가 일어나지만, 엄격함 속에서도 양자리에 있어서는 그것이 활발한 자극이 되어 '좋아!! 여기서부터 해 줄게' 라고 자신을 분발시켜 가는 것으로 좋은 물결을 잡아가게 되겠지요. <br /> <br />

            또 역경에 강한 것도 양자리의 강한 특징으로, 그럴 때야말로 타고난 에너지와 리더십을 발휘해 자기 자신을 향상시켜 갈 수있습니다. 안정된 작입운이 되는 것은 5월 이후에 행운을 주는 행성의 목성이 양자리의 하우스에 들어가고 나서부터입니다. 일에 대한 보람을 재확인하거나 새로운 열정을 바탕으로 행동을 하게 될 것입니다. 일과 자신이 중요하게 생각하는 라이프 워크가 서로 링크되는 타이밍이 되기도 합니다. 소위 "좋아하는 것이 일이 되는" 기회가 올 것입니다. 반대로 지금의 일을 좋아하지 않거나 전직을 생각하고 있다면 솔직한 자신의 기분을 바탕으로 행동합시다. 무심코 이익이나 상태 등에 묶여 버리면, 별로 좋지 않은 방향으로 진행되어 버릴 수도 있습니다. 좋아하는 것을 추구하면 점점 비약하고 발전 합니다. <br /> <br /></p> 
        

            <h5>2022년 금전운</h5>
            <h6>구체적인 수입향상에 기대할 수 있다</h6>
            <br />
            <p>모든 방향에서 이익이 들어가기 쉬운 시기입니다. 업무운과도 연동되어 있기 때문에 스텝 업과 활약의 필드가 확대됨으로써 필연적으로 손에 쥐는 이익도 증대할 가능성이 높겠지요. 또 하나의 일이 아닌, 부업이나 취미 등이 더해져 거기로부터 이익을 얻을 수 있고, 평범하게 버는 것보다 기쁜 기분이 되기도 한다. 2022년은 지금보다 더 수입이 증가할 것으로 기대해도 좋을 것입니다. 조심하고 싶은 것은, 돈에 관해서 너무 혹독하게 되거나 '이런 좋은 일이 생길 리가 없지' 라고, 고정 관념에 묶여 버리는 것입니다. <br /> <br />

            하지만 뻔한 기회들이 오고 있으니 그걸 놓쳐버리기에는 너무 아까운 일입니다. 노력한 것, 열정을 불태운 것에서 얻은 돈은 값진 것입니다. 결코 편하게 얻은 것이 아니기 때문에 겸손할 필요는 없습니다. 특히 여름 이후에는 강한 운기가 되기 때문에 구체적인 형태로 보수를 받을 수 있게 됩니다. 뭔가 아이디어가 있으면 그것을 실행하거나 사이드 비즈니스 등을 시작하는 것도 좋은 시기입니다. <br />  <br /></p> 

            <h5>2022년 결혼운</h5>
            <h6>5월까지 인내의 시기</h6>
            <br />
            <p>2022년 양자리의 결혼운은 5월까지는 별로 좋은 상황이 아닙니다. 커플은 상대의 사소한 한마디의 상처를 입거나 '왜 그렇게 되는 거야' 라고 하는 언동에 좌우되어 버리는 일도 많이 생길 수도 있습니다. 하지만 '왜그러는 거야?' 라고 그 이유를 직접 캐묻지도 못하고 내 속에서만 고민할 것 같았습니다. '나였다면 이런 일은 하지 않는다, 말하지 않는다' 라고 하는 기준으로 사물을 판단해, 그것을 상대방에게 적용시켜 버리는 마인드가 되기 쉬울 것입니다. <br /> <br />

            연애 관계뿐이라면 상대에게 위화감을 가지고 있어도 거기에도 모른 채 할 수는 있겠지만, 결혼 관계를 의식하고 있다면 이야기는 다릅니다. 주저나 사양 혹은 겸손은, 엇갈림의 근원이 된다고 하는 것을 이해해 두지 않으면 안 됩니다. 또 조금 애정 면에서의 안정이, 모든 의문이나 불안을 증대시키고 있는 것으로도 연결되고 있습니다. 스스로 굳이 불안을 만들어 내고 있다면 그것을 정지시킬 필요도 있습니다. 그러나 자문자답의 시기는 5월에는 점차 해소되어 10월까지 계속되기 때문에, 이 시기에 생각지도 않은 프러포즈를 받을 수도 있을 것입니다. <br /> <br />

            그 이후부터 연말까지는 안정된 애정관계를 형성하고 구체적인 결혼 준비에 들어가게 될 것입니다. 싱글인 사람도 5월부터의 타이밍으로 기쁜 만남을 기대할 수 있습니다. 그때까지는 내면적으로나 외형적으로 자신을 연마하거나 모든 가사 전반을 기술 업 시켜, 신부 수업에 힘을 써 두면 좋을 것입니다. 행동이 만남과 사건을 불러오게 되는 것입니다. <br /><br /> </p> 

            <h5>2022년의 건강운</h5>
            <h6>상태가 좋지 않지만 안정되어 있다.</h6>
            <br />
            <p>2022년 양자리의 건강운은, 전반적으로 제대로 자기 자신의 컨디션을 정돈하거나, 혹은 개선해 나가는 시기입니다. 활력이 넘치고 있기 때문에 모든 면에서 상태가 좋지 않은 것도 있습니다. 긴장감이나 충실감이 있으면 자율 신경이 활성화해, 교감 신경이 우위가 되기 때문에, 약간의 통증이나 위화감을 눈치채지 못하는 상황도 발생합니다. 증상도 잘 나타나지 않기 때문에 심해질 때까지 완전히 방치해 버리는 상황이 되기 쉬울 것 입니다. <br /> <br />

            일정한 밸런스와 컨디션 속에서 상당한 건강운이 유지되고 있지만, 의식적으로 자신의 건강에 관심을 가짐으로써 한층 더 좋은 상태가 될 수 있으므로, 건강진단을 받고 수치적으로 자신의 몸에 대해 알거나 운동을 하는 등을 하면 좋을 것입니다. 또한 자신에게 맞는 운동 방법을 2022년에 확립할 수 있습니다. <br /> <br />

            예를 들어 음악을 들으며, 운동할 수 있다고 하는 경우에는 춤이나 에어로빅 등 비슷하게 하기에도 좋고, 반대로 조용한 것이 좋다고 하는 경우에는 걷기와 런닝, 혹은 요가 등을 하는 것처럼 자신에게 맞는 방법을 발견하면 앞으로도 계속 즐길 수 있을 것입니다. 시기적으로는 3월까지, 10월 이후 기온이 내려가는 시기에는 방한 대책, 감염 대책을 확실히 명심하십시오. <br /> <br /></p>
            <hr />
            <li><h3>✰ 궁합</h3></li><br />
            황도 12궁의 제 1궁이며, 12궁으로는 3월 21일~4월 19일에 해당한다. 

          </ul>
        </div>
</div>
  )
}


export default App;

