import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy501 } from '../generated/copy/copy501';
import { layout501 } from '../generated/layouts/layout501';
import { palette501 } from '../generated/palettes/palette501';

const RuntimeView501 = withUniwind(View);

export function Screen501() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView501 styleClassName={layout501.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy501.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy501.detail} / {palette501.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
