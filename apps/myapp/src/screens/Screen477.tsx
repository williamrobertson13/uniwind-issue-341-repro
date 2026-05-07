import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy477 } from '../generated/copy/copy477';
import { layout477 } from '../generated/layouts/layout477';
import { palette477 } from '../generated/palettes/palette477';

const RuntimeView477 = withUniwind(View);

export function Screen477() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView477 styleClassName={layout477.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy477.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy477.detail} / {palette477.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
