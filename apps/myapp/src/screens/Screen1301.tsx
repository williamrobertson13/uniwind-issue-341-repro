import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1301 } from '../generated/copy/copy1301';
import { layout1301 } from '../generated/layouts/layout1301';
import { palette1301 } from '../generated/palettes/palette1301';

const RuntimeView1301 = withUniwind(View);

export function Screen1301() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView1301 styleClassName={layout1301.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy1301.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1301.detail} / {palette1301.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
