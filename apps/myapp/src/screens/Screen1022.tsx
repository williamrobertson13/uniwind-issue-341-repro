import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1022 } from '../generated/copy/copy1022';
import { layout1022 } from '../generated/layouts/layout1022';
import { palette1022 } from '../generated/palettes/palette1022';

const RuntimeView1022 = withUniwind(View);

export function Screen1022() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<RuntimeView1022 styleClassName={layout1022.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy1022.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1022.detail} / {palette1022.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
