'use server'

function Home() {


  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        <div className="p-8">
          <input type="text" class="bg-slate-900 py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Destination"></input>
          <input type="text" class="mt-4 bg-slate-900 py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Activity (Family Friendly, Adult, Mixed)"></input>
          <input type="text" class="mt-4 bg-slate-900 py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Additional Instructions"></input>

          <div class="space-y-0.5 bg-slate-900 rounded-3xl p-3 mt-4">
            <div class="grid grid-cols-5 items-center gap-x-3 mx-1.5 pb-3">
              <div class="col-span-1">
                <button type="button" class="w-8 h-8 flex justify-center items-center text-gray-800 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-600">
                  <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                </button>
              </div>

              <div class="col-span-3 flex justify-center items-center gap-x-1">
                <div class="relative">
                  <select data-hs-select='{
            "placeholder": "Select month",
            "toggleTag": "<button type=\"button\"></button>",
            "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative flex text-nowrap w-full cursor-pointer text-start font-medium text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600 before:absolute before:inset-0 before:z-[1] text-gray-200 hover:text-gray-300 focus:text-gray-300",
            "dropdownClasses": "mt-2 z-50 w-32 max-h-[300px] p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-slate-700 [&::-webkit-scrollbar-thumb]:bg-slate-500 bg-slate-900 border-gray-700",
            "optionClasses": "p-2 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 bg-slate-900 hover:bg-slate-800 text-gray-200 focus:bg-slate-800",
            "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 w-3.5 h-3.5 text-gray-800 text-gray-200\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
          }' class="hidden">
                    <option value="0">January</option>
                    <option value="1">February</option>
                    <option value="2">March</option>
                    <option value="3">April</option>
                    <option value="4">May</option>
                    <option value="5">June</option>
                    <option value="6" selected>July</option>
                    <option value="7">August</option>
                    <option value="8">September</option>
                    <option value="9">October</option>
                    <option value="10">November</option>
                    <option value="11">December</option>
                  </select>
                </div>

                <span class="text-gray-800 text-gray-200">/</span>

                <div class="relative">
                  <select data-hs-select='{
            "placeholder": "Select year",
            "toggleTag": "<button type=\"button\"></button>",
            "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative flex text-nowrap w-full cursor-pointer text-start font-medium text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600 before:absolute before:inset-0 before:z-[1] text-gray-200 hover:text-gray-300 focus:text-gray-300",
            "dropdownClasses": "mt-2 z-50 w-20 max-h-[300px] p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-slate-700 [&::-webkit-scrollbar-thumb]:bg-slate-500 bg-slate-900 border-gray-700",
            "optionClasses": "p-2 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 bg-slate-900 hover:bg-slate-800 text-gray-200 focus:bg-slate-800",
            "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 w-3.5 h-3.5 text-gray-800 text-gray-200\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
          }' class="hidden">
                    <option selected>2023</option>
                    <option>2024</option>
                    <option>2025</option>
                    <option>2026</option>
                    <option>2027</option>
                  </select>
                </div>
              </div>

              <div class="col-span-1 flex justify-end">
                <button type="button" class="w-8 h-8 flex justify-center items-center text-gray-800 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-600">
                  <svg class="flex-shrink-0 w-4 h-4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                </button>
              </div>
            </div>

            <div class="flex pb-1.5">
              <span class="m-px w-10 block text-center text-sm text-gray-500">
                Mo
              </span>
              <span class="m-px w-10 block text-center text-sm text-gray-500">
                Tu
              </span>
              <span class="m-px w-10 block text-center text-sm text-gray-500">
                We
              </span>
              <span class="m-px w-10 block text-center text-sm text-gray-500">
                Th
              </span>
              <span class="m-px w-10 block text-center text-sm text-gray-500">
                Fr
              </span>
              <span class="m-px w-10 block text-center text-sm text-gray-500">
                Sa
              </span>
              <span class="m-px w-10 block text-center text-sm text-gray-500">
                Su
              </span>
            </div>

            <div class="flex">
              <div>
                <button type="button" class="m-px w-10 h-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none text-gray-200 hover:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600 disabled:text-gray-600" disabled>
                  26
                </button>
              </div>
              <div>
                <button type="button" class="m-px w-10 h-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none text-gray-200 hover:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600 disabled:text-gray-600" disabled>
                  27
                </button>
              </div>
              <div>
                <button type="button" class="m-px w-10 h-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none text-gray-200 hover:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600 disabled:text-gray-600" disabled>
                  28
                </button>
              </div>
              <div>
                <button type="button" class="m-px w-10 h-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none text-gray-200 hover:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600 disabled:text-gray-600" disabled>
                  29
                </button>
              </div>
              <div>
                <button type="button" class="m-px w-10 h-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none text-gray-200 hover:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600 disabled:text-gray-600" disabled>
                  30
                </button>
              </div>
              <div>
                <button type="button" class="m-px w-10 h-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none text-gray-200 hover:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600 disabled:text-gray-600">
                  1
                </button>
              </div>
              <div>
                <button type="button" class="m-px w-10 h-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none text-gray-200 hover:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600 disabled:text-gray-600">
                  2
                </button>
              </div>
            </div>

            <div class="flex">
              <div>
                <button type="button" class="m-px w-10 h-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none text-gray-200 hover:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600 disabled:text-gray-600">
                  3
                </button>
              </div>
              <div>
                <button type="button" class="m-px w-10 h-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none text-gray-200 hover:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600 disabled:text-gray-600">
                  4
                </button>
              </div>
              <div>
                <button type="button" class="m-px w-10 h-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none text-gray-200 hover:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600 disabled:text-gray-600">
                  5
                </button>
              </div>
              <div>
                <button type="button" class="m-px w-10 h-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none text-gray-200 hover:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600 disabled:text-gray-600">
                  6
                </button>
              </div>
              <div>
                <button type="button" class="m-px w-10 h-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none text-gray-200 hover:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600 disabled:text-gray-600">
                  7
                </button>
              </div>
              <div>
                <button type="button" class="m-px w-10 h-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none text-gray-200 hover:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600 disabled:text-gray-600">
                  8
                </button>
              </div>
              <div>
                <button type="button" class="m-px w-10 h-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none text-gray-200 hover:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600 disabled:text-gray-600">
                  9
                </button>
              </div>
            </div>

            <div class="flex">
              <div>
                <button type="button" class="m-px w-10 h-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none text-gray-200 hover:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600 disabled:text-gray-600">
                  10
                </button>
              </div>
              <div>
                <button type="button" class="m-px w-10 h-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none text-gray-200 hover:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600 disabled:text-gray-600">
                  11
                </button>
              </div>
              <div>
                <button type="button" class="m-px w-10 h-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none text-gray-200 hover:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600 disabled:text-gray-600">
                  12
                </button>
              </div>
              <div>
                <button type="button" class="m-px w-10 h-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none text-gray-200 hover:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600 disabled:text-gray-600">
                  13
                </button>
              </div>
              <div>
                <button type="button" class="m-px w-10 h-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none text-gray-200 hover:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600 disabled:text-gray-600">
                  14
                </button>
              </div>
              <div>
                <button type="button" class="m-px w-10 h-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none text-gray-200 hover:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600 disabled:text-gray-600">
                  15
                </button>
              </div>
              <div>
                <button type="button" class="m-px w-10 h-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none text-gray-200 hover:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600 disabled:text-gray-600">
                  16
                </button>
              </div>
            </div>

            <div class="flex">
              <div>
                <button type="button" class="m-px w-10 h-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none text-gray-200 hover:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600 disabled:text-gray-600">
                  17
                </button>
              </div>
              <div>
                <button type="button" class="m-px w-10 h-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none text-gray-200 hover:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600 disabled:text-gray-600">
                  18
                </button>
              </div>
              <div>
                <button type="button" class="m-px w-10 h-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none text-gray-200 hover:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600 disabled:text-gray-600">
                  19
                </button>
              </div>
              <div>
                <button type="button" class="m-px w-10 h-10 flex justify-center items-center bg-blue-600 border border-transparent text-sm font-medium text-white hover:border-blue-600 rounded-full bg-blue-500 disabled:text-gray-300 disabled:pointer-events-none hover:border-gray-700">
                  20
                </button>
              </div>
              <div>
                <button type="button" class="m-px w-10 h-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none text-gray-200 hover:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600 disabled:text-gray-600">
                  21
                </button>
              </div>
              <div>
                <button type="button" class="m-px w-10 h-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none text-gray-200 hover:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600 disabled:text-gray-600">
                  22
                </button>
              </div>
              <div>
                <button type="button" class="m-px w-10 h-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none text-gray-200 hover:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600 disabled:text-gray-600">
                  23
                </button>
              </div>
            </div>

            <div class="flex">
              <div>
                <button type="button" class="m-px w-10 h-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none text-gray-200 hover:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600 disabled:text-gray-600">
                  24
                </button>
              </div>
              <div>
                <button type="button" class="m-px w-10 h-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none text-gray-200 hover:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600 disabled:text-gray-600">
                  25
                </button>
              </div>
              <div>
                <button type="button" class="m-px w-10 h-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none text-gray-200 hover:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600 disabled:text-gray-600">
                  26
                </button>
              </div>
              <div>
                <button type="button" class="m-px w-10 h-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none text-gray-200 hover:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600 disabled:text-gray-600">
                  27
                </button>
              </div>
              <div>
                <button type="button" class="m-px w-10 h-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none text-gray-200 hover:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600 disabled:text-gray-600">
                  28
                </button>
              </div>
              <div>
                <button type="button" class="m-px w-10 h-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none text-gray-200 hover:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600 disabled:text-gray-600">
                  29
                </button>
              </div>
              <div>
                <button type="button" class="m-px w-10 h-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none text-gray-200 hover:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600 disabled:text-gray-600">
                  30
                </button>
              </div>
            </div>

            <div class="flex">
              <div>
                <button type="button" class="m-px w-10 h-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none text-gray-200 hover:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600 disabled:text-gray-600">
                  31
                </button>
              </div>
              <div>
                <button type="button" class="m-px w-10 h-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none text-gray-200 hover:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600 disabled:text-gray-600" disabled>
                  1
                </button>
              </div>
              <div>
                <button type="button" class="m-px w-10 h-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none text-gray-200 hover:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600 disabled:text-gray-600" disabled>
                  2
                </button>
              </div>
              <div>
                <button type="button" class="m-px w-10 h-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none text-gray-200 hover:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600 disabled:text-gray-600" disabled>
                  3
                </button>
              </div>
              <div>
                <button type="button" class="m-px w-10 h-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none text-gray-200 hover:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600 disabled:text-gray-600" disabled>
                  4
                </button>
              </div>
              <div>
                <button type="button" class="m-px w-10 h-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none text-gray-200 hover:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600 disabled:text-gray-600" disabled>
                  5
                </button>
              </div>
              <div>
                <button type="button" class="m-px w-10 h-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none text-gray-200 hover:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600 /disabled:text-gray-600" disabled>
                  6
                </button>
              </div>
            </div>
          </div>

          <button type="button" class="mt-8 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-teal-500 text-white hover:bg-teal-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600">
            Generate 🪄
          </button>
        </div>
      </div>

      <div class="m-8 flex flex-col bg-slate-900 border shadow-sm rounded-xl border-gray-700 shadow-slate-700/[.7]">
        <div class="p-4 md:p-10">
          <h3 class="text-lg font-bold text-gray-800 text-white">
            Card title
          </h3>
          <p class="mt-2 text-gray-500 text-gray-400">
            With supporting text below as a natural lead-in to additional content.
          </p>
          <a class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none text-blue-500 hover:text-blue-400 focus:outline-none focus:ring-1 focus:ring-gray-600" href="#">
            Card link
            <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
          </a>
        </div>
      </div>



    </div>
  );
}

export default Home;
