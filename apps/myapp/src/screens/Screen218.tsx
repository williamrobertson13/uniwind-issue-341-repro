import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy218 } from '../generated/copy/copy218';
import { layout218 } from '../generated/layouts/layout218';
import { palette218 } from '../generated/palettes/palette218';

const RuntimeView218 = withUniwind(View);

export function Screen218() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<RuntimeView218 styleClassName={layout218.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy218.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy218.detail} / {palette218.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
