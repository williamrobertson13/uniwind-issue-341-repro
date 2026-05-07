import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy873 } from '../generated/copy/copy873';
import { layout873 } from '../generated/layouts/layout873';
import { palette873 } from '../generated/palettes/palette873';

const RuntimeView873 = withUniwind(View);

export function Screen873() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView873 styleClassName={layout873.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy873.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy873.detail} / {palette873.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
