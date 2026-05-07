import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1310 } from '../generated/copy/copy1310';
import { layout1310 } from '../generated/layouts/layout1310';
import { palette1310 } from '../generated/palettes/palette1310';

const RuntimeView1310 = withUniwind(View);

export function Screen1310() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<RuntimeView1310 styleClassName={layout1310.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy1310.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1310.detail} / {palette1310.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
