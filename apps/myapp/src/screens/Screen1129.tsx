import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1129 } from '../generated/copy/copy1129';
import { layout1129 } from '../generated/layouts/layout1129';
import { palette1129 } from '../generated/palettes/palette1129';

const RuntimeView1129 = withUniwind(View);

export function Screen1129() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xl font-bold text-gray-500');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView1129 styleClassName={layout1129.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500" style={resolvedStyle}>{copy1129.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1129.detail} / {palette1129.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
