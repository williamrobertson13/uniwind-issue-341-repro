import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1141 } from '../generated/copy/copy1141';
import { layout1141 } from '../generated/layouts/layout1141';
import { palette1141 } from '../generated/palettes/palette1141';

const RuntimeView1141 = withUniwind(View);

export function Screen1141() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView1141 styleClassName={layout1141.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy1141.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1141.detail} / {palette1141.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
