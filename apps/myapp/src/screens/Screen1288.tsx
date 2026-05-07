import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1288 } from '../generated/copy/copy1288';
import { layout1288 } from '../generated/layouts/layout1288';
import { palette1288 } from '../generated/palettes/palette1288';

const RuntimeView1288 = withUniwind(View);

export function Screen1288() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<RuntimeView1288 styleClassName={layout1288.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy1288.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1288.detail} / {palette1288.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
