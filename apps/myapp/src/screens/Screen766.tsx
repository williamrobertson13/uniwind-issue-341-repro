import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy766 } from '../generated/copy/copy766';
import { layout766 } from '../generated/layouts/layout766';
import { palette766 } from '../generated/palettes/palette766';

const RuntimeView766 = withUniwind(View);

export function Screen766() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<RuntimeView766 styleClassName={layout766.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy766.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy766.detail} / {palette766.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
