import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1319 } from '../generated/copy/copy1319';
import { layout1319 } from '../generated/layouts/layout1319';
import { palette1319 } from '../generated/palettes/palette1319';

const RuntimeView1319 = withUniwind(View);

export function Screen1319() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<RuntimeView1319 styleClassName={layout1319.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy1319.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1319.detail} / {palette1319.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
