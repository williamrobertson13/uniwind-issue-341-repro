import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1190 } from '../generated/copy/copy1190';
import { layout1190 } from '../generated/layouts/layout1190';
import { palette1190 } from '../generated/palettes/palette1190';

const RuntimeView1190 = withUniwind(View);

export function Screen1190() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<RuntimeView1190 styleClassName={layout1190.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy1190.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1190.detail} / {palette1190.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
