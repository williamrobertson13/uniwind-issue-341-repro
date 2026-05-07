import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy861 } from '../generated/copy/copy861';
import { layout861 } from '../generated/layouts/layout861';
import { palette861 } from '../generated/palettes/palette861';

const RuntimeView861 = withUniwind(View);

export function Screen861() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView861 styleClassName={layout861.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy861.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy861.detail} / {palette861.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
