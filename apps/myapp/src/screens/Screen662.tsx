import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy662 } from '../generated/copy/copy662';
import { layout662 } from '../generated/layouts/layout662';
import { palette662 } from '../generated/palettes/palette662';

const RuntimeView662 = withUniwind(View);

export function Screen662() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<RuntimeView662 styleClassName={layout662.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy662.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy662.detail} / {palette662.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
