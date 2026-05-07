import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy263 } from '../generated/copy/copy263';
import { layout263 } from '../generated/layouts/layout263';
import { palette263 } from '../generated/palettes/palette263';

const RuntimeView263 = withUniwind(View);

export function Screen263() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<RuntimeView263 styleClassName={layout263.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy263.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy263.detail} / {palette263.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
