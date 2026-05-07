import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1151 } from '../generated/copy/copy1151';
import { layout1151 } from '../generated/layouts/layout1151';
import { palette1151 } from '../generated/palettes/palette1151';

const RuntimeView1151 = withUniwind(View);

export function Screen1151() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<RuntimeView1151 styleClassName={layout1151.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy1151.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1151.detail} / {palette1151.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
