import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy118 } from '../generated/copy/copy118';
import { layout118 } from '../generated/layouts/layout118';
import { palette118 } from '../generated/palettes/palette118';

const RuntimeView118 = withUniwind(View);

export function Screen118() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<RuntimeView118 styleClassName={layout118.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy118.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy118.detail} / {palette118.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
