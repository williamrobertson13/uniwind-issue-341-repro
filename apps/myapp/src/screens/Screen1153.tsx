import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1153 } from '../generated/copy/copy1153';
import { layout1153 } from '../generated/layouts/layout1153';
import { palette1153 } from '../generated/palettes/palette1153';

const RuntimeView1153 = withUniwind(View);

export function Screen1153() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView1153 styleClassName={layout1153.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy1153.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1153.detail} / {palette1153.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
