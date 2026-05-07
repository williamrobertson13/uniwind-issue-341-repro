import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1021 } from '../generated/copy/copy1021';
import { layout1021 } from '../generated/layouts/layout1021';
import { palette1021 } from '../generated/palettes/palette1021';

const RuntimeView1021 = withUniwind(View);

export function Screen1021() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xl font-bold text-gray-500');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView1021 styleClassName={layout1021.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500" style={resolvedStyle}>{copy1021.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1021.detail} / {palette1021.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
