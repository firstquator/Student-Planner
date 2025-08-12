'use client'

import React, { useState } from 'react'
import { 
  Button, 
  Input, 
  Card, 
  Modal,
  ModalHeader,
  ModalTitle,
  ModalBody,
  ModalFooter,
  Loading,
  Navbar,
  NavbarBrand,
  NavbarMenu,
  NavbarItem,
  NavbarActions,
  Textarea,
  Select,
  SelectOption,
  Checkbox,
  Radio,
  RadioGroup,
  Toggle,
  Label,
  Link,
  Icon,
  Avatar,
  AvatarGroup,
  Badge,
  Tag,
  Chip,
  Divider,
  Spacer,
  Toast,
  Notification,
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogBody,
  DialogFooter,
  Popover,
  Tooltip,
  Spinner,
  ProgressBar,
  Skeleton,
  Pagination
} from '@/lib/components/ui'

export default function ComponentsPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [popoverOpen, setPopoverOpen] = useState(false)
  const [toggleChecked, setToggleChecked] = useState(false)
  const [selectedRadio, setSelectedRadio] = useState('option1')
  const [currentPage, setCurrentPage] = useState(1)
  const [chipSelected, setChipSelected] = useState(false)

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* 네비게이션 */}
      <Navbar>
        <NavbarBrand href="/">
          <Icon name="home" size="md" className="mr-2" />
          Airbnb 디자인 시스템
        </NavbarBrand>
        <NavbarMenu>
          <NavbarItem href="/" active={false}>홈</NavbarItem>
          <NavbarItem href="/components" active={true}>컴포넌트</NavbarItem>
        </NavbarMenu>
        <NavbarActions>
          <Button variant="secondary" size="sm">
            <Icon name="user" size="sm" className="mr-2" />
            로그인
          </Button>
        </NavbarActions>
      </Navbar>

      <div className="container mx-auto px-6 py-8 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#222222] mb-2">UI 컴포넌트 데모</h1>
          <p className="text-[#717171] text-lg">Airbnb 디자인 시스템을 기반으로 한 모든 컴포넌트들을 확인해보세요.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 버튼 섹션 */}
          <Card>
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-[#222222] mb-2">Button</h2>
              <p className="text-[#717171] text-sm">다양한 스타일의 버튼 컴포넌트</p>
            </div>
            <div className="space-y-4">
              <div className="flex gap-3 flex-wrap">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="icon" size="md">
                  <Icon name="heart" size="md" />
                </Button>
              </div>
              <div className="flex gap-3 flex-wrap">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
              <div className="flex gap-3 flex-wrap">
                <Button loading>Loading...</Button>
                <Button disabled>Disabled</Button>
              </div>
            </div>
          </Card>

          {/* 입력 필드 섹션 */}
          <Card>
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-[#222222] mb-2">Input & Form</h2>
              <p className="text-[#717171] text-sm">입력 필드 및 폼 요소들</p>
            </div>
            <div className="space-y-4">
              <div>
                <Label required>이메일</Label>
                <Input type="email" placeholder="이메일을 입력하세요" className="mt-1" />
              </div>
              <div>
                <Label>검색</Label>
                <Input variant="search" placeholder="검색어를 입력하세요" className="mt-1" />
              </div>
              <div>
                <Label>에러 상태</Label>
                <Input error placeholder="에러 상태 예시" className="mt-1" />
              </div>
              <div>
                <Label>메모</Label>
                <Textarea placeholder="메모를 입력하세요" className="mt-1" />
              </div>
              <div>
                <Label>카테고리 선택</Label>
                <Select placeholder="카테고리를 선택하세요" className="mt-1">
                  <SelectOption value="category1">카테고리 1</SelectOption>
                  <SelectOption value="category2">카테고리 2</SelectOption>
                  <SelectOption value="category3">카테고리 3</SelectOption>
                </Select>
              </div>
            </div>
          </Card>

          {/* 체크박스와 라디오 섹션 */}
          <Card>
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-[#222222] mb-2">Selection Controls</h2>
              <p className="text-[#717171] text-sm">체크박스, 라디오, 토글</p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Checkbox label="옵션 1" />
                <Checkbox label="옵션 2" defaultChecked />
                <Checkbox label="비활성화" disabled />
              </div>
              <Divider />
              <div>
                <Label className="mb-2 block">라디오 그룹</Label>
                <RadioGroup 
                  name="demo-radio" 
                  value={selectedRadio}
                  onChange={setSelectedRadio}
                  orientation="vertical"
                >
                  <Radio value="option1" label="옵션 1" />
                  <Radio value="option2" label="옵션 2" />
                  <Radio value="option3" label="옵션 3" />
                </RadioGroup>
              </div>
              <Divider />
              <Toggle 
                checked={toggleChecked}
                onChange={setToggleChecked}
                label="알림 받기"
              />
            </div>
          </Card>

          {/* 아바타와 배지 섹션 */}
          <Card>
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-[#222222] mb-2">Avatar & Badges</h2>
              <p className="text-[#717171] text-sm">아바타, 배지, 태그 컴포넌트</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Avatar fallback="김철수" size="sm" />
                <Avatar fallback="김철수" size="md" />
                <Avatar fallback="김철수" size="lg" status="online" />
                <Avatar fallback="김철수" size="xl" status="busy" />
              </div>
              <AvatarGroup max={3} spacing="normal">
                <Avatar fallback="김철수" />
                <Avatar fallback="이영희" />
                <Avatar fallback="박민수" />
                <Avatar fallback="정다은" />
                <Avatar fallback="최준호" />
              </AvatarGroup>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="new">NEW</Badge>
                <Badge variant="guestFavorite">게스트 추천</Badge>
                <Badge variant="success">성공</Badge>
                <Badge variant="warning">경고</Badge>
                <Badge variant="error">에러</Badge>
              </div>
              <div className="flex gap-2 flex-wrap">
                <Tag color="primary" removable>React</Tag>
                <Tag color="success" variant="outlined">TypeScript</Tag>
                <Tag color="info" variant="ghost">Next.js</Tag>
              </div>
            </div>
          </Card>

          {/* 칩 섹션 */}
          <Card>
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-[#222222] mb-2">Chip</h2>
              <p className="text-[#717171] text-sm">선택 가능한 칩 컴포넌트</p>
            </div>
            <div className="space-y-4">
              <div className="flex gap-2 flex-wrap">
                <Chip 
                  selected={chipSelected} 
                  clickable
                  onClick={() => setChipSelected(!chipSelected)}
                >
                  클릭 가능
                </Chip>
                <Chip startIcon="star">별점</Chip>
                <Chip endIcon="chevron-down">더보기</Chip>
                <Chip onDelete={() => console.log('삭제됨')}>삭제 가능</Chip>
              </div>
              <div className="flex gap-2 flex-wrap">
                <Chip variant="outlined">Outlined</Chip>
                <Chip disabled>비활성화</Chip>
                <Chip size="sm">작은 크기</Chip>
                <Chip size="lg">큰 크기</Chip>
              </div>
            </div>
          </Card>

          {/* 로딩과 프로그레스 섹션 */}
          <Card>
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-[#222222] mb-2">Loading & Progress</h2>
              <p className="text-[#717171] text-sm">로딩 및 진행 상태 표시</p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Loading size="sm" text="작은 로딩" />
                <Loading size="md" variant="dots" />
                <Loading size="lg" variant="pulse" color="secondary" />
                <Spinner size="md" color="primary" />
              </div>
              <div className="space-y-3">
                <ProgressBar value={30} showLabel label="프로젝트 진행도" />
                <ProgressBar value={65} color="success" animated />
                <ProgressBar value={80} variant="striped" color="warning" />
              </div>
              <div className="space-y-3">
                <Skeleton variant="text" lines={3} />
                <div className="flex items-center gap-3">
                  <Skeleton variant="circular" width={40} height={40} />
                  <div className="flex-1">
                    <Skeleton variant="text" width="60%" />
                    <Skeleton variant="text" width="40%" />
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* 모달과 다이얼로그 섹션 */}
          <Card>
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-[#222222] mb-2">Modal & Dialog</h2>
              <p className="text-[#717171] text-sm">모달, 다이얼로그, 팝오버</p>
            </div>
            <div className="space-y-4">
              <div className="flex gap-3 flex-wrap">
                <Button onClick={() => setModalOpen(true)}>모달 열기</Button>
                <Button onClick={() => setDialogOpen(true)}>다이얼로그 열기</Button>
                <Popover
                  open={popoverOpen}
                  onClose={() => setPopoverOpen(false)}
                  trigger={
                    <Button onClick={() => setPopoverOpen(!popoverOpen)}>
                      팝오버 {popoverOpen ? '닫기' : '열기'}
                    </Button>
                  }
                  placement="bottom"
                >
                  <div className="p-2">
                    <p className="text-sm font-medium mb-2">팝오버 내용</p>
                    <p className="text-xs text-[#717171]">추가 정보나 옵션을 표시합니다.</p>
                  </div>
                </Popover>
              </div>
              <div className="flex gap-3">
                <Tooltip content="이것은 툴팁입니다" placement="top">
                  <Button variant="ghost">툴팁 표시</Button>
                </Tooltip>
                <Tooltip content="오른쪽에 표시되는 툴팁" placement="right">
                  <Button variant="ghost">오른쪽 툴팁</Button>
                </Tooltip>
              </div>
            </div>
          </Card>

          {/* 알림 섹션 */}
          <Card>
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-[#222222] mb-2">Toast & Notification</h2>
              <p className="text-[#717171] text-sm">토스트와 알림 컴포넌트</p>
            </div>
            <div className="space-y-4">
              <div className="space-y-3">
                <Toast 
                  variant="success" 
                  title="성공!"
                  description="작업이 성공적으로 완료되었습니다."
                  duration={0}
                />
                <Toast 
                  variant="warning" 
                  title="경고"
                  description="주의가 필요한 상황입니다."
                  duration={0}
                />
                <Toast 
                  variant="error" 
                  title="오류"
                  description="문제가 발생했습니다."
                  duration={0}
                />
              </div>
              <Divider />
              <Notification
                variant="info"
                title="새로운 메시지"
                description="김철수님이 메시지를 보냈습니다."
                time="5분 전"
                avatar=""
                avatarFallback="김철수"
                actions={
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost">답장</Button>
                    <Button size="sm" variant="primary">확인</Button>
                  </div>
                }
              />
            </div>
          </Card>

          {/* 페이지네이션 섹션 */}
          <Card className="lg:col-span-2">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-[#222222] mb-2">Pagination</h2>
              <p className="text-[#717171] text-sm">페이지 네비게이션 컴포넌트</p>
            </div>
            <div className="space-y-6">
              <div className="flex flex-col items-center gap-4">
                <Pagination
                  currentPage={currentPage}
                  totalPages={10}
                  onPageChange={setCurrentPage}
                />
                <p className="text-sm text-[#717171]">
                  현재 페이지: {currentPage} / 총 10페이지
                </p>
              </div>
              <Divider />
              <div className="flex items-center justify-center">
                <Pagination
                  currentPage={5}
                  totalPages={20}
                  onPageChange={() => {}}
                  size="sm"
                  siblingCount={2}
                />
              </div>
            </div>
          </Card>

          {/* 기타 유틸리티 섹션 */}
          <Card className="lg:col-span-2">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-[#222222] mb-2">Utility Components</h2>
              <p className="text-[#717171] text-sm">구분선, 간격, 링크 등 유틸리티 컴포넌트</p>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Divider</h3>
                <div className="space-y-4">
                  <Divider />
                  <Divider variant="dashed" color="medium">텍스트가 있는 구분선</Divider>
                  <div className="flex items-center gap-4 h-16">
                    <p>왼쪽 컨텐츠</p>
                    <Divider orientation="vertical" />
                    <p>오른쪽 컨텐츠</p>
                  </div>
                </div>
              </div>
              
              <Divider />
              
              <div>
                <h3 className="text-lg font-medium mb-3">Links</h3>
                <div className="flex gap-4 flex-wrap">
                  <Link href="#" variant="primary">Primary Link</Link>
                  <Link href="#" variant="secondary" underline="always">Always Underlined</Link>
                  <Link href="#" variant="ghost">Ghost Link</Link>
                  <Link href="https://airbnb.com" external>External Link</Link>
                </div>
              </div>
              
              <Divider />
              
              <div>
                <h3 className="text-lg font-medium mb-3">Icons</h3>
                <div className="flex gap-4 flex-wrap">
                  <Icon name="heart" size="sm" color="error" />
                  <Icon name="star-filled" size="md" color="warning" />
                  <Icon name="user" size="lg" color="primary" />
                  <Icon name="home" size="xl" color="success" />
                </div>
              </div>
            </div>
          </Card>
        </div>

        <Spacer size="2xl" />

        {/* 홈으로 돌아가기 버튼 */}
        <div className="fixed bottom-6 right-6 z-50">
          <Link href="/">
            <Button variant="primary" size="lg" className="shadow-lg">
              <Icon name="home" size="md" className="mr-2" />
              홈으로 돌아가기
            </Button>
          </Link>
        </div>
      </div>

      {/* 모달들 */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} size="md">
        <ModalHeader>
          <ModalTitle>모달 제목</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <p className="text-[#717171]">
            모달의 내용이 여기에 표시됩니다. 사용자에게 중요한 정보를 전달하거나 
            추가적인 작업을 요청할 때 사용됩니다.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" onClick={() => setModalOpen(false)}>
            취소
          </Button>
          <Button variant="primary" onClick={() => setModalOpen(false)}>
            확인
          </Button>
        </ModalFooter>
      </Modal>

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} size="lg">
        <DialogHeader onClose={() => setDialogOpen(false)}>
          <DialogTitle>다이얼로그 제목</DialogTitle>
          <DialogDescription>
            다이얼로그에 대한 부가 설명이 여기에 표시됩니다.
          </DialogDescription>
        </DialogHeader>
        <DialogBody>
          <div className="space-y-4">
            <p className="text-[#717171]">
              다이얼로그는 모달과 유사하지만 더 복잡한 상호작용이나 
              폼을 포함할 때 사용됩니다.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>이름</Label>
                <Input placeholder="이름을 입력하세요" className="mt-1" />
              </div>
              <div>
                <Label>이메일</Label>
                <Input type="email" placeholder="이메일을 입력하세요" className="mt-1" />
              </div>
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button variant="secondary" onClick={() => setDialogOpen(false)}>
            취소
          </Button>
          <Button variant="primary" onClick={() => setDialogOpen(false)}>
            저장
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  )
}