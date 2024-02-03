window.onload = function () {
    OrgChart.templates.family_template_11 = Object.assign({}, OrgChart.templates.ana);
    OrgChart.templates.family_template_11.size = [200, 140];
    OrgChart.templates.family_template_11.plus = "";
    OrgChart.templates.family_template_11.minus = "";
    OrgChart.templates.family_template_11.node = '';
    OrgChart.templates.family_template_11.rippleRadius = 45;
    OrgChart.templates.family_template_11.name_1 = '<text class="name_1" style="font-size: 12px;" fill="#000000" x="100" y="105" text-anchor="middle">{val}</text>';
    OrgChart.templates.family_template_11.name_2 = '<text class="name_2" style="font-size: 12px;" fill="#000000" x="235" y="105" text-anchor="middle">{val}</text>';
    OrgChart.templates.family_template_11.name_3 = '<text class="name_3" style="font-size: 12px;" fill="#000000" x="370" y="105" text-anchor="middle">{val}</text>';
    OrgChart.templates.family_template_11.title_1 = '<text class="title_1" style="font-size: 12px;" fill="#aeaeae" x="100" y="120" text-anchor="middle">{val}</text>';
    OrgChart.templates.family_template_11.title_2 = '<text class="title_2" style="font-size: 12px;" fill="#aeaeae" x="235" y="120" text-anchor="middle">{val}</text>';
    OrgChart.templates.family_template_11.title_3 = '<text class="title_3" style="font-size: 12px;" fill="#aeaeae" x="370" y="120" text-anchor="middle">{val}</text>';
    OrgChart.templates.family_template_11.img_0 = '<clipPath id="{randId}"><circle cx="100" cy="45" r="40"></circle></clipPath><circle stroke-width="3" fill="none" stroke="#aeaeae" cx="100" cy="45" r="45"></circle><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="60" y="5"  width="80" height="80"></image>';
    OrgChart.templates.family_template_11.linkAdjuster =
        {
            fromX: 0,
            fromY: 0,
            toX: 0,
            toY: 0
        };


    OrgChart.templates.family_template_12 = Object.assign({}, OrgChart.templates.family_template_11);
    OrgChart.templates.family_template_12.img_0 = '<clipPath id="{randId}"><circle cx="100" cy="45" r="40"></circle></clipPath><circle stroke-width="3" fill="none" stroke="#039BE5" cx="100" cy="45" r="45"></circle><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="60" y="5"  width="80" height="80"></image>';
    OrgChart.templates.family_template_12.linkAdjuster =
        {
            fromX: 0,
            fromY: 0,
            toX: 0,
            toY: -95
        };

    }