import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy294 } from '../generated/copy/copy294';
import { layout294 } from '../generated/layouts/layout294';
import { palette294 } from '../generated/palettes/palette294';

const RuntimeView294 = withUniwind(View);

export function Screen294() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<RuntimeView294 styleClassName={layout294.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy294.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy294.detail} / {palette294.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
