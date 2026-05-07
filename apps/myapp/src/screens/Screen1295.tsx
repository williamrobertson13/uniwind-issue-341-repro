import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1295 } from '../generated/copy/copy1295';
import { layout1295 } from '../generated/layouts/layout1295';
import { palette1295 } from '../generated/palettes/palette1295';

const RuntimeView1295 = withUniwind(View);

export function Screen1295() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<RuntimeView1295 styleClassName={layout1295.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy1295.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1295.detail} / {palette1295.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
