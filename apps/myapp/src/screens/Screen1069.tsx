import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1069 } from '../generated/copy/copy1069';
import { layout1069 } from '../generated/layouts/layout1069';
import { palette1069 } from '../generated/palettes/palette1069';

const RuntimeView1069 = withUniwind(View);

export function Screen1069() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView1069 styleClassName={layout1069.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy1069.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1069.detail} / {palette1069.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
