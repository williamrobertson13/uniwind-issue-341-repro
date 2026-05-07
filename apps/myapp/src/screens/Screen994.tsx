import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy994 } from '../generated/copy/copy994';
import { layout994 } from '../generated/layouts/layout994';
import { palette994 } from '../generated/palettes/palette994';

const RuntimeView994 = withUniwind(View);

export function Screen994() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xl font-bold text-gray-500');

	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-14 bg-amber-500 rounded-full" />
			<RuntimeView994 styleClassName={layout994.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500" style={resolvedStyle}>{copy994.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy994.detail} / {palette994.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
