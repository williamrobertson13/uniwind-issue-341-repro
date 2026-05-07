import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy663 } from '../generated/copy/copy663';
import { layout663 } from '../generated/layouts/layout663';
import { palette663 } from '../generated/palettes/palette663';

const RuntimeView663 = withUniwind(View);

export function Screen663() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView663 styleClassName={layout663.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy663.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy663.detail} / {palette663.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
