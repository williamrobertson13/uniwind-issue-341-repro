import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy897 } from '../generated/copy/copy897';
import { layout897 } from '../generated/layouts/layout897';
import { palette897 } from '../generated/palettes/palette897';

const RuntimeView897 = withUniwind(View);

export function Screen897() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView897 styleClassName={layout897.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy897.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy897.detail} / {palette897.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
