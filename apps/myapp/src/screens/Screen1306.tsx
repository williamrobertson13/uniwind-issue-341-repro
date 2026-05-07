import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1306 } from '../generated/copy/copy1306';
import { layout1306 } from '../generated/layouts/layout1306';
import { palette1306 } from '../generated/palettes/palette1306';

const RuntimeView1306 = withUniwind(View);

export function Screen1306() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-14 bg-amber-500 rounded-full" />
			<RuntimeView1306 styleClassName={layout1306.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy1306.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1306.detail} / {palette1306.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
