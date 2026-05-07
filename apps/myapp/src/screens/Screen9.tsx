import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy9 } from '../generated/copy/copy9';
import { layout9 } from '../generated/layouts/layout9';
import { palette9 } from '../generated/palettes/palette9';

const RuntimeView9 = withUniwind(View);

export function Screen9() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView9 styleClassName={layout9.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy9.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy9.detail} / {palette9.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
