import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1198 } from '../generated/copy/copy1198';
import { layout1198 } from '../generated/layouts/layout1198';
import { palette1198 } from '../generated/palettes/palette1198';

const RuntimeView1198 = withUniwind(View);

export function Screen1198() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<RuntimeView1198 styleClassName={layout1198.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy1198.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1198.detail} / {palette1198.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
