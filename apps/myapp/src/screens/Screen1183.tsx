import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1183 } from '../generated/copy/copy1183';
import { layout1183 } from '../generated/layouts/layout1183';
import { palette1183 } from '../generated/palettes/palette1183';

const RuntimeView1183 = withUniwind(View);

export function Screen1183() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xl font-bold text-gray-500');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<RuntimeView1183 styleClassName={layout1183.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500" style={resolvedStyle}>{copy1183.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1183.detail} / {palette1183.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
