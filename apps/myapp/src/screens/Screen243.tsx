import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy243 } from '../generated/copy/copy243';
import { layout243 } from '../generated/layouts/layout243';
import { palette243 } from '../generated/palettes/palette243';

const RuntimeView243 = withUniwind(View);

export function Screen243() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView243 styleClassName={layout243.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy243.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy243.detail} / {palette243.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
