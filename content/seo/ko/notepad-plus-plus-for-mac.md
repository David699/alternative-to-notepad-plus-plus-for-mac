---
slug: notepad-plus-plus-for-mac
englishEquivalentPath: /en/notepad-plus-plus-for-mac/
title: 맥에서 EditPlus·Notepad++ 대신 쓸 만한 텍스트 에디터
shortTitle: 맥 Notepad++ 대체 에디터
description: >-
  윈도우에서 EditPlus나 Notepad++를 쓰다 맥으로 넘어온 분들을 위한 안내. EUC-KR 한글 깨짐, 정규식 찾기·바꾸기,
  탭 편집을 맥에서 어떻게 이어갈지 질문과 답으로 정리했습니다.
datePublished: '2026-06-23'
dateModified: '2026-07-05'
keywords:
  - 맥 메모장
  - 맥 텍스트 에디터
  - 노트패드++ 맥
  - notepad++ mac
  - EditPlus 맥
  - 한글 깨짐 맥
  - EUC-KR 변환
  - 맥 코드 에디터
  - 정규식 찾기 바꾸기 맥
  - 가벼운 에디터 맥
heroKicker: 윈도우 에디터에서 맥으로
heroSummary: >-
  EditPlus도 AcroEdit도, Notepad++도 맥 버전은 없습니다. 그래도 탭 편집, 정규식 찾기·바꾸기, 열 단위 편집까지
  손에 익은 방식을 포기할 필요는 없습니다. {{APP_NAME}} 는 그 일상 작업을 맥에서 네이티브로 이어가는 독립 텍스트
  에디터입니다.
related:
  - label: 이 페이지의 영어 버전
    href: /en/notepad-plus-plus-for-mac/
  - label: "{{APP_NAME}} 한국어 홈"
    href: /ko/
  - label: 맥에서 Notepad++ 중복 줄 제거하는 방법
    href: /ko/remove-duplicate-lines-mac/
externalLinks:
  - label: App Store에서 {{APP_NAME}} 받기
    href: appStore
    external: true
  - label: Notepad++ 공식 사이트 보기
    href: notepadPlusPlus
    external: true
  - label: GitHub에서 사이트 프로젝트 보기
    href: github
    external: true
faq:
  - q: "{{APP_NAME}} 는 Notepad++ 공식 맥 버전인가요?"
    a: 아닙니다. {{APP_NAME}} 는 독립적인 macOS 텍스트 에디터이며 공식 Notepad++ 프로젝트와 관련이 없습니다.
  - q: EditPlus나 AcroEdit는 맥에서 쓸 수 있나요?
    a: 두 에디터 모두 윈도우 전용이라 맥 버전이 없습니다. 탭·정규식·열 편집 같은 일상 작업이 필요하다면 {{APP_NAME}} 가 가까운 대안입니다.
  - q: EUC-KR로 저장한 옛날 파일, 한글이 깨지는데요?
    a: EUC-KR이나 CP949 같은 예전 인코딩으로 저장된 파일도 올바르게 열 수 있어, 오래된 문서의 한글이 깨지지 않고 그대로 보입니다.
  - q: 그냥 메모장 수준이면 충분한데 굳이 필요한가요?
    a: 단순 메모라면 기본 앱으로도 됩니다. 다만 여러 파일을 탭으로 열고, 정규식으로 정리하고, 열 단위로 편집하는 일이 잦다면 전용 에디터가 훨씬 빠릅니다.
  - q: 정규식으로 찾기·바꾸기가 되나요?
    a: 네. 대소문자 구분과 단어 단위 검색을 포함한 정규식 찾기·바꾸기를 지원합니다.
  - q: Wine이나 가상 머신이 필요한가요?
    a: 필요 없습니다. {{APP_NAME}} 는 macOS 네이티브 앱으로, 윈도우 호환 레이어 없이 동작합니다.
---
## 맥에는 EditPlus나 AcroEdit 같은 에디터가 없을까?

윈도우에서 텍스트를 다뤄 본 사람이라면 손에 익은 에디터가 하나쯤 있습니다. 국내 개발자와 사무직이 오래 써 온 **EditPlus**, 무료로 널리 쓰이던 **AcroEdit**, 그리고 해외에서 넘어온 **Notepad++**. 세 가지 모두 탭으로 여러 파일을 열고, 로그를 정리하고, 설정 파일을 고치는 일을 맡아 왔습니다.

문제는 이 셋 중 어느 것도 맥 버전이 없다는 점입니다. 맥으로 넘어온 첫날, "그 작업은 뭘로 하지?" 하고 손이 멈추는 이유입니다. {{APP_NAME}} 는 바로 그 지점을 위한 독립 텍스트 에디터입니다. Notepad++ 공식 앱은 아니지만, 익숙했던 편집 흐름을 맥에서 이어가는 것을 목표로 합니다.

## 메모장 대신 뭘 쓰면 되나요?

맥 기본 앱 TextEdit는 서식 있는 문서에는 괜찮지만, 순수 텍스트 작업에는 부족합니다. 인코딩을 세밀하게 다루거나, 정규식으로 한 번에 정리하거나, 여러 파일을 탭으로 오가는 작업에는 맞지 않습니다.

{{APP_NAME}} 는 그 빈자리를 채웁니다. 프로젝트를 만들 필요 없이 파일을 바로 열고, 가벼운 창 안에서 탭으로 전환하며, 필요한 만큼만 편집하고 닫습니다. Notepad++ 를 하루에도 여러 번 열던 그 리듬을 그대로 가져올 수 있습니다.

## EUC-KR로 저장된 옛날 파일, 한글이 깨지는데요?

한국어 사용자에게 가장 흔한 골칫거리입니다. 예전에 만든 텍스트나 로그, 게시판에서 내려받은 파일은 EUC-KR이나 CP949로 저장된 경우가 많습니다. 이런 파일을 UTF-8로 가정하고 열면 한글이 전부 깨져 알아볼 수 없게 됩니다.

{{APP_NAME}} 는 EUC-KR·CP949 같은 예전 인코딩으로 저장된 파일을 올바르게 열 수 있어, 십 년 전 문서도 깨지지 않고 그대로 읽힙니다. 오래된 자료를 정리해야 할 때 특히 요긴합니다.

## 그래서 {{APP_NAME}} 로는 뭘 할 수 있나요?

- 여러 파일을 탭으로 열어 가벼운 창에서 오가기
- Column Mode로 로그나 CSV의 세로 정렬을 한 번에 편집하기
- Regex 찾기·바꾸기로 반복되는 패턴을 정리하기
- Workspace Search로 폴더 전체에서 원하는 줄 찾기
- Markdown Preview로 문서와 초안을 확인하기
- Script Pipelines와 Batch Processing으로, 적용 전에 차이를 확인하며 반복 작업 처리하기

반복 작업에는 선택형 AI 도움으로 텍스트 정리 스크립트를 만들 수 있고, 여러 대의 맥에서 같은 환경을 쓰고 싶다면 iCloud Sync도 사용할 수 있습니다. 무거운 개발 환경이 필요하다면 IDE가 맞지만, 매일의 텍스트 작업이라면 이 정도의 가벼운 에디터가 더 빠릅니다.

## 상표와 독립성 안내

Notepad++ 는 각 권리자의 상표입니다. EditPlus와 AcroEdit 역시 각 제작사의 상표입니다. {{APP_NAME}} 는 독립적인 macOS 텍스트 에디터이며, 이들 프로젝트와 제휴·보증·관련이 없습니다.
